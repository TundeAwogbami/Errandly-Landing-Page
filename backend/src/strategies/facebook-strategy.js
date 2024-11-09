import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import dotenv from "dotenv";
import User from "../models/User.js";
import Token from "../models/Token.js";
import { attachCookiesToResponse } from "../utils/jwt.js";
import crypto from "crypto";

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: "http://localhost:5001/api/auth/facebook/redirect",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ facebookId: profile.id });
        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            provider: profile.provider,
            facebookId: profile.id,
          });
        }
        const tokenUser = {
          id: user._id,
          name: user.name,
          role: user.role,
        };

        let refreshTokenValue;

        const existingToken = await Token.findOne({ user: user._id });

        if (existingToken) {
          if (!existingToken.isValid) {
            return done(null, false, { message: "User is not authorised" });
          }
          refreshTokenValue = existingToken.refreshToken;
        } else {
          refreshTokenValue = crypto.randomBytes(40).toString("hex");
          await Token.create({
            refreshToken: refreshTokenValue,
            ip: req.ip,
            userAgent: req.headers["user-agent"],
            user: user._id,
          });
        }

        attachCookiesToResponse({
          res: req.res,
          user: tokenUser,
          refreshToken: refreshTokenValue,
        });

        return done(null, user);
      } catch (error) {
        console.error("Error during Facebook authentication:", error);
        return done(error, null);
      }
    }
  )
);

import passport from "passport";
import { Strategy } from "passport-google-oauth20";
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

export default passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5001/api/auth/google/redirect",
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: profile.emails[0].value,
            provider: profile.provider,
            googleId: profile.id,
          });
        }
        const tokenUser = {
          id: user._id,
          name: user.name,
          role: user.role,
        };

        let refreshToken;

        const existingToken = await Token.findOne({ user: user._id });

        if (existingToken) {
          if (!existingToken.isValid) {
            return done(null, false, { message: "User is not authorised" });
          }
          refreshToken = existingToken.refreshToken;
        } else {
          refreshToken = crypto.randomBytes(40).toString("hex");
          await Token.create({
            refreshToken,
            ip: req.ip,
            userAgent: req.headers["user-agent"],
            user: user._id,
          });
        }

        attachCookiesToResponse({
          res: req.res,
          user: tokenUser,
          refreshToken,
        });

        return done(null, user);
      } catch (error) {
        console.error("Error during Google authentication:", error);
        return done(error, null);
      }
    }
  )
);

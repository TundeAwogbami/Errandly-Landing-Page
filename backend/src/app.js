import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler.js";
import routes from "./routes/index.js";
import passport from "passport";
import session from "express-session";
import "./strategies/google-strategy.js";
import "./strategies/facebook-strategy.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

// Middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.JWT_SECRET));

app.use(helmet());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(passport.initialize());
app.use(passport.session());

// Google Oauth
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/api/auth/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    console.log("sucessfully authenticated");
    res.redirect(`${process.env.FRONTEND_URL}`);
  }
);

//Facebook Oauth
app.get(
  "/api/auth/facebook",
  passport.authenticate("facebook", { scope: ["email", "public_profile"] })
);

app.get(
  "/api/auth/facebook/redirect",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (req, res) => {
    console.log("sucessfully authenticated");
    res.redirect(`${process.env.FRONTEND_URL}`);
  }
);

app.use("/api", routes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;

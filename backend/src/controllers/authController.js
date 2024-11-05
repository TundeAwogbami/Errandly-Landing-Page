import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Token from "../models/Token.js";
import { attachCookiesToResponse } from "../utils/jwt.js";
import crypto from "crypto";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const verifyEmail = async (req, res) => {};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
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
        res.status(401).json({ msg: "User is not authorised" });
        return;
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

    attachCookiesToResponse({ res, user: tokenUser, refreshToken });

    res.status(200).json({ user: tokenUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong", error: error.message });
  }
};

export const logout = async (req, res) => {
  await Token.findOneAndDelete({ user: req.user.id });

  res.cookie("accessToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.cookie("refreshToken", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(204);
};

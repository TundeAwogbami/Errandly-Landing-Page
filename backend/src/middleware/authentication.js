import { attachCookiesToResponse, isTokenValid } from "../utils/jwt.js";
import Token from "../models/Token.js";

export const authenticateUser = async (req, res, next) => {
  const { accessToken, refreshToken } = req.signedCookies;

  console.log("accessToken:", accessToken);
  console.log("refreshToken:", refreshToken);

  try {
    if (accessToken) {
      const payload = isTokenValid(accessToken);

      console.log("payload:", payload);
      req.user = payload.user;
      return next();
    }

    const payload = isTokenValid(refreshToken);

    console.log("payload:", payload);

    const existingToken = await Token.findOne({
      user: payload.user.id,
      refreshToken: payload.refreshToken,
    });
    if (!existingToken || !existingToken?.isValid) {
      res.status(401);
      return res.status(401).json({ message: "User is not authorized!" });
    }

    attachCookiesToResponse({
      res,
      user: payload.user,
      refreshToken: existingToken.refreshToken,
    });
    req.user = payload.user;
    return next();
  } catch (error) {
    res.status(401);
    return res
      .status(401)
      .json({ message: "User is not authorized!", error: error.message });
  }
};

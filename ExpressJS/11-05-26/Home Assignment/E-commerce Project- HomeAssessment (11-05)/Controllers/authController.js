const User = require("../models/user");
const Otp = require("../models/otp");
const PendingUser = require("../models/PendingUser");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");

const sendEmail = require("../utils/sendEmail");


// GENERATE TOKENS
const generateTokens = (user) => {

   const accessToken = jwt.sign(
      {
         id: user._id,
         role: user.role
      },
      process.env.JWT_SECRET,
      {
         expiresIn: "15m"
      }
   );

   const refreshToken = jwt.sign(
      {
         id: user._id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
         expiresIn: "7d"
      }
   );

   return {
      accessToken,
      refreshToken
   };

};


// REGISTER
exports.register = asyncHandler(async (req, res) => {

   const {
      name,
      email,
      password,
      adminSecret
   } = req.body;


   const existingUser = await PendingUser.findOne({
      email
   });

   if (existingUser) {

      res.status(409);

      throw new Error(
         "User already exists. OTP already sent."
      );

   }


   const hashedPassword = await bcrypt.hash(
      password,
      10
   );

   const role =
      adminSecret === "admin123"
         ? "admin"
         : "user";


   await PendingUser.create({
      name,
      email,
      password: hashedPassword,
      role
   });


   const otp =
      Math.floor(100000 + Math.random() * 900000);


   await Otp.create({
      email,
      otp
   });


   const emailSent = await sendEmail(email, otp);

   if (!emailSent) {

      res.status(422);

      throw new Error(
         "Failed to send OTP email"
      );

   }


   res.status(201).json({
      success: true,
      message: "OTP sent successfully"
   });

});


// VERIFY OTP
exports.verifyOtp = asyncHandler(async (req, res) => {

   const { email, otp } = req.body;


   const otpRecord = await Otp.findOne({
      email,
      otp
   });

   if (!otpRecord) {

      res.status(400);

      throw new Error(
         "Invalid or expired OTP"
      );

   }


   const pendingUser = await PendingUser.findOne({
      email
   });

   if (!pendingUser) {

      res.status(410);

      throw new Error(
         "Registration session expired"
      );

   }


   const existingUser = await User.findOne({
      email
   });

   if (existingUser) {

      res.status(409);

      throw new Error(
         "User already exists"
      );

   }


   const user = await User.create({

      name: pendingUser.name,

      email: pendingUser.email,

      password: pendingUser.password,

      role: pendingUser.role,

      isVerified: true

   });


   await PendingUser.deleteOne({ email });

   await Otp.deleteOne({ email });


   res.status(200).json({
      success: true,
      message: "Email verified successfully",
      user
   });

});


// LOGIN
exports.login = asyncHandler(async (req, res) => {

   const {
      email,
      password
   } = req.body;


   const user = await User.findOne({
      email
   });

   if (!user) {

      res.status(401);

      throw new Error(
         "Invalid email or password"
      );

   }


   if (!user.isVerified) {

      res.status(403);

      throw new Error(
         "Email not verified"
      );

   }


   const isMatch = await bcrypt.compare(
      password,
      user.password
   );

   if (!isMatch) {

      res.status(401);

      throw new Error(
         "Invalid email or password"
      );

   }


   const {
      accessToken,
      refreshToken
   } = generateTokens(user);


   user.refreshToken = refreshToken;

   await user.save();


   res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken,
      refreshToken
   });

});


// REFRESH TOKEN
exports.refreshToken = asyncHandler(async (req, res) => {

   const { refreshToken } = req.body;


   if (!refreshToken) {

      res.status(401);

      throw new Error(
         "Refresh token missing"
      );

   }


   let decoded;

   try {

      decoded = jwt.verify(
         refreshToken,
         process.env.REFRESH_TOKEN_SECRET
      );

   } catch (error) {

      res.status(403);

      throw new Error(
         "Invalid or expired refresh token"
      );

   }


   const user = await User.findById(
      decoded.id
   );


   if (
      !user ||
      user.refreshToken !== refreshToken
   ) {

      res.status(403);

      throw new Error(
         "Refresh token mismatch"
      );

   }


   const {
      accessToken,
      refreshToken: newRefreshToken
   } = generateTokens(user);


   user.refreshToken = newRefreshToken;

   await user.save();


   res.status(200).json({
      success: true,
      message: "Token refreshed",
      accessToken,
      refreshToken: newRefreshToken
   });

});
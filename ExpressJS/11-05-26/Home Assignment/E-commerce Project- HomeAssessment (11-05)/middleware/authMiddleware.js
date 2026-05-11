const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const User = require("../models/user");

exports.protect = asyncHandler(async (req, res, next) => {

   const authHeader = req.headers.authorization;

   if (!authHeader || !authHeader.startsWith("Bearer ")) {
      res.status(401);
      throw new Error("Access token missing");
   }

   const accessToken = authHeader.split(" ")[1];

   const decoded = jwt.verify(
      accessToken,
      process.env.JWT_SECRET
   );

   const user = await User.findById(decoded.id)
      .select("-password -refreshToken");

   if (!user) {
      res.status(401);
      throw new Error("User not found");
   }

   req.user = user;

   next();

});


exports.authorize = (...roles) => {

   return (req, res, next) => {

      if (!roles.includes(req.user.role)) {
         res.status(403);
         throw new Error("Access denied");
      }

      next();

   };

};

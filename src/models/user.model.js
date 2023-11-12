import mongoose, { Schema } from "mongoose";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },
    fullName: {
      type: String,
      required: ture,
      trim: true,
      index: true
    },
    avtar: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "video"
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    refreshToken: {
      type: String
    }
  },
  { timestamps: true }
);

//before saving the password we are hashing the password throw bcrypt
userSchema.pre("save", async function (next) {
  if(!this.isModified("password")) return next(); // this will run when password is not modified

  this.password = await bcrypt.hash(this.password,10); // when modified the password
  next();
});

//compare the password, this.password belongs to hash password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password)
}

//Generating access token
userSchema.methods.generateAccessToken = function () {
  jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName
    },                               // payload
    process.env.ACCESS_TOKEN_SECRET, // access token

    {expiresIn: process.env.ACCESS_TOKEN_EXPIRY} //expiry
  )
}

//Generating refresh token
userSchema.methods.generateRefreshToken = function () {
  jwt.sign(
    {
      _id: this._id,
    },                               // payload
    process.env.REFRESH_TOKEN_SECRET, // access token

    {expiresIn: process.env.REFRESH_TOKEN_EXPIRY} //expiry
  )
}
export const User = mongoose.model("User", userSchema);

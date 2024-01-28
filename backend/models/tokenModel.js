const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema(
  {
    refreshToken: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", tokenSchema);

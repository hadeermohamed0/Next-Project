const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

 
UserSchema.pre("save", async function (next) {
    //hash password before saving 6 marat
    const hashPassword = await bcrypt.hash(this.password, 6);
    console.log( hashPassword);
    this.password = hashPassword;

  next();
});
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

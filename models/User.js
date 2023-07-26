const { timeStamp } = require("console");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    organization: { type: String, required: true },
    email: { type: String, required: true , unique: true },
    password: { type: String, required: true}
  },
  { timestamps: true }
);

// mongoose.models = {};
// export default mongoose.model("User", UserSchema);

// we can also use replace of line 15 and 16

export default mongoose.models.User || mongoose.model("User" , UserSchema);
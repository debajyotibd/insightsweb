const { timeStamp } = require('console');
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      organization: { type: String, required: true },
      email: { type: String, required: true },
      message: { type: String, required: true}
    },
    { timestamps: true }
  );

mongoose.models = {}
export default mongoose.model("Order", OrderSchema);
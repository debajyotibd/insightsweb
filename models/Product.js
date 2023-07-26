const { timeStamp } = require('console');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    // id : {type: String, required: true },
    title : {type: String, required: true },
    desc:  {type: String, required: true },
    image:  {type: String, required: true },
    docNo: {type: String, required: true },
    tokens:{type: String, required: true },
    video: {type: String, required: true },
    catagory:  {type: String, required: true }

}, {timestamps: true});

mongoose.models = {}
export default mongoose.model("Product", ProductSchema);
import Product from "@/models/Product"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i< req.body.length; i++) {
        let p = await Product.findByIdAndUpdate(req.body[i]._id,req.body[i] )  
    }
       
    res.status(200).json({success : "This Method Appllied Successfully !!!"})
}
    else{
        res.status(400).json({error : "This Method is not ALLOWED !!!"})
    }
    // let products = await Product.find()
    // res.status(200).json({ products })
 }
export default connectDb(handler);
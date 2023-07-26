import User from "@/models/Order"
import connectDb from "../../middleware/mongoose"
// var CryptoJS = require ("crypto-js")

const handler = async (req, res) =>{
    if (req.method == "POST") {
        console.log(req.body)
        const {name, organization, email, message} = req.body
        let u = new User({name, organization, email, message})
        await u.save()

       res.status(200).json({success : "This Method Appllied Successfully !!!"})
    }
    
    else{
        res.status(400).json({error : "This Method is not ALLOWED !!!"})
    }
    // let products = await Product.find()
    // res.status(200).json({ products })
}
export default connectDb(handler); 
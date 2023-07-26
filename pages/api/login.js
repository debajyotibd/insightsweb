import User from "@/models/User"
import connectDb from "../../middleware/mongoose"
var CryptoJS = require ("crypto-js")
var jwt = require("jsonwebtoken");


const handler = async (req, res) =>{
    if (req.method == "POST") {
        // console.log(req.body)
        let user = await User.findOne({"email": req.body.email})
        // const bytes = CryptoJS.AES.decrypt( user.password, process.env.AES_SECRET);
        // console.log(bytes.toString(CryptoJS.enc.Utf8))
        // let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)

        if(user){
            const bytes = CryptoJS.AES.decrypt( user.password, process.env.AES_SECRET);
            // console.log(bytes.toString(CryptoJS.enc.Utf8))
            let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)

            if (req.body.email == user.email && req.body.password == decryptedPass){
                var token = jwt.sign({email:user.email, name:user.name}, process.env.JWT_SECRET , {expiresIn: "1d"});
                res.status(200).json({success : true , token})
        
            }
            else {
                res.status(200).json({success : false , error: "Invalid Password"})
            }
        }
    else{
        res.status(200).json({success : false , error: "No Eamil matched"})         
        }

    }           


    // let products = await Product.find()
    // res.status(200).json({ products })
}
export default connectDb(handler);
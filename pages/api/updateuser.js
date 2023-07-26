

import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
import jsonwebtoken from "jsonwebtoken"



const  handler = async (req, res) => {


    if(req.method == "POST"){
     
        let token = req.body.token
        let user = jsonwebtoken.verify(token, "jwtsecret")
        let dbuser = await User.findOneAndUpdate ({email: user.email} , {name: req.body.name , organization: req.body.organization })
        res.status(200).json({screen: true })

    }
    else {
        res.status(400).json({ error : "error" })
        }
}

export default connectDb(handler);
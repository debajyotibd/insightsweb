import connectDb from "../../middleware/mongoose"
import User from "../../models/User"
import jsonwebtoken from "jsonwebtoken"



const  handler = async (req, res) => {


    if(req.method == "POST"){
     
        let token = req.body.token
        let user = jsonwebtoken.verify(token, "jwtsecret")
        let dbuser = await User.findOne({email: user.email})
        const {name, email, organization} = dbuser
        console.log(dbuser)
        res.status(200).json({ name, email, organization })

    }
    else {
        res.status(400).json({ error : "error" })
        }
}

export default connectDb(handler);
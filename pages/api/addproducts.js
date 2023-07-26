import Product from "@/models/Product"
import connectDb from "../../middleware/mongoose"


const handler = async (req, res) =>{
    if (req.method == "POST") {
        for (let i = 0; i< req.body.length; i++){
        let p = new Product ({
            // id : req.body[i].Id,
            title: req.body[i].title,
            desc:   req.body[i].desc,
            image:  req.body[i].image,
            docNo:  req.body[i].docNo,
            tokens: req.body[i].tokens,
            video:  req.body[i].video,
            catagory: req.body[i].catagory
            
        })
        await p.save()
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
const userModel = require("../model/usermodel")
const productModel = require("../model/productmodel");

async function signUp(req, res) {
    const { username, email, password } = req.body;
    try {
        if (!username || !password) return res.status(400).send({ error: "Missing data" });



        let user = await userModel.findOne({ username: username });
        if (user) return res.status(400).send({ error: "User already exists." });


        user = await userModel.create({
            username: username,
            password: password,
            email: email,
        })

        return res.send({
            user: {
                id: user.id,
                username: user.username
            }
        });
    } catch (e) {
        console.log(e)
        return res.status(500).send()
    }

}

async function login(req, res) {
    const {  email, password } = req.body;
    console.log(req.body);
    try {
        if (!email || !password) return res.status(400).send({ error: "Missing data" });
//check the user in database
        let user = await userModel.findOne({  email: email,
        password:password });
        console.log(user);
        if (user) return res.status(200).send("Login successful" );
        else return res.status(401).send( 'Wrong credentials.');

        
    } catch (e) {
        console.log(e)
        return res.status(500).send()
    }

}



async function addpost(req, res) {
    const { id, title, price, img, quantity } = req.body;
    try {
        let product= await productModel.create({
            id:id,
            title:title,
            price:price,
            img:img,
            quantity:quantity})
    return res.send({
        product:id,
        title:title,
        price:price,
        img:img,
        quantity:quantity
    })
             
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
}

async function getProducts(req,res){
   const products=await  productModel.find();
   return res.json(products);
}


    





    module.exports = { signUp,addpost,getProducts ,login};



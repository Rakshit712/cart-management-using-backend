const mongoose  = require("mongoose")

const cartSchema = mongoose.Schema({
    userId :{
        type: String,
        required: true
    },
   products :{
    type:[

        {
        productId:{
            type:String ,

        },
    quantity:{
        type:Number,
        default:1
    }}
    ]
   }
})

const cartModel = mongoose.model("cart",cartSchema);
module.exports= cartModel;
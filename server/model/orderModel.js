const mongoose  = require("mongoose")

const orderSchema = mongoose.Schema({
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
   },
   amount :{
    type: Number,
    required:true
   },
})

const orderModel = mongoose.model("order",orderSchema);
module.exports= orderModel;
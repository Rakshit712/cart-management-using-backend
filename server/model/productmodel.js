const mongoose  = require("mongoose")

const productSchema = mongoose.Schema({
   id :{
    type:Number,
    required : true,

   },
   title :{
    type:String ,
    required :true
   },
   price :{
    type: Number,
    required: true
   },
   img :{
    type : String,
    required: true
   },
   quantity:{
    type : Number,
    default :1
   }, catagory :{
      type : Array,

   }
})

const productModel = mongoose.model("product",productSchema);
module.exports= productModel;
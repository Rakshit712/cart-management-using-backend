const mongoose  = require("mongoose")


const userSchema = mongoose.Schema({
    email:{
        type:String,
       required : true,
    },
    username:{
        type: String,
        unique : true ,
        required:true

    },
    password :{
        type:String,
        required:true
    },
    order:{
        type:Array,
        default:[]
    }
})

const userModel = mongoose.model("user",userSchema);
module.exports= userModel;
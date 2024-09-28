const mongoose=require('mongoose');


const itemSchema=new mongoose.Schema({
    name:String,
    description:String

})

const itemModule=mongoose.model("Item",itemSchema);
module.exports=itemModule;
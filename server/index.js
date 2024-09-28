const express=require('express');
const database=require('./db.js')
const itemModel=require('./module/item.js');
const cors=require('cors');

const app=express();
app.use(express.json());
app.use(cors());

database();

app.get('/',async (req,res)=>{
    const items=await itemModel.find();
    res.json(items);
})

app.listen(3000,()=>{
    console.log("App is running");
})
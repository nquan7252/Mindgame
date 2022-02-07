var express= require('express');
var path=require('path');
var app=express();
app.use(express.static(path.join(__dirname,'build')));
const PORT=process.env.PORT||3001;
app.get('/',(req,res)=>{
     res.sendFile(path.resolve(__dirname, "build", "index.html"))});
app.listen(PORT);
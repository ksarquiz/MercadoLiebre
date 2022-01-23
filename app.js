const express = require("express");
const app = express();
const path = require ("path");

//const publicPath= path.resolve(__dirname,"./public");
app.use("/static",express.static(__dirname + "/public"));


app.listen(3030,()=>{console.log("servidor corriendo")});
app.get("/",function(req,res){
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});
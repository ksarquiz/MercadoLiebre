const express = require("express");
const app = express();
const path = require("path");
const homeControler = require("./controllers/homeControllers");

//const publicPath= path.resolve(__dirname,"./public");
app.use("/static", express.static(__dirname + "/public"));


app.listen( process.env.PORT || 3030, () => { console.log("servidor corriendo") });

app.get("/",homeControler.detalle);
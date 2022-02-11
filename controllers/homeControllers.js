const path = require("path");

let homeControler={
    listar:function(){

    },
    crear:function(){

    },
    detalle:function (req, res) {
        res.sendFile(path.resolve(__dirname, "../views/home.html"));
    },
};

module.exports = homeControler;
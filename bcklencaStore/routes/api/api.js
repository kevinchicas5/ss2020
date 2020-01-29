//rutas --> router --> app: express
//rutas --> router:entidad --> router:api -> api:express

var express = require('express');
var router = express.Router();

//http://localhost:3000/api/version

router.get('/version', function(req, res){
res.status(200).json({"version": "API v1.0"});

});

router.get('/yo', function(req, res){
    res.status(200).json({"yo": "0801199606218", "Nombre": "Kevin Chicas"});

});

module.exports = router;


/*
var mensaje = "Hola Mundo";

module.exports = mensaje;

//Estructura de un Modulo y uso de modulo.exports para exponer la funcionalidad del modulo

var liblencaFuntions = {}; //JSON JAVASCRIPT OBJECT NOTATION

liblencaFuntions.mensaje = "Hola Mundo";
liblencaFuntions.version = "v1.0";
liblencaFuntions.sayHello = ()=>{
    console.log("Hello!");
} // ES6

module.exports = liblencaFuntions; */
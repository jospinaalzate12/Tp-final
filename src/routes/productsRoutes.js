const express=require('express')
const {getAllproducts,getHistory,getcontacto, getLog, getPassword, getRegistro}=require('../controllers/productsContrllers')
const productsRoutes=express.Router()

productsRoutes.get("/productos",getAllproducts)
productsRoutes.get("/historia",getHistory)
productsRoutes.get("/contacto",getcontacto)
productsRoutes.get("/logueo",getLog)
productsRoutes.get("/password",getPassword)
productsRoutes.get("/registrarse",getRegistro)
module.exports=productsRoutes

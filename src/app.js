const express= require('express');
const app=express();
const dataBaseconection=require('../config/database');
const productsRoutes=require('./routes/productsRoutes')
const path=require('path');

app.use('/inicio',productsRoutes)

dataBaseconection.connect()

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'../public')));



app.listen(9000,()=>{
    console.log('Escuchando el puerto 9000')
});
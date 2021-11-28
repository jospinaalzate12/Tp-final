const dataBaseconection=require('../../config/database');
//ponemos todos los get
const getAllproducts=(req,res)=>{

 dataBaseconection.query('SELECT * FROM products',(error,info)=>{
     if(error){
         console.log(error)
     }else{
         res.render('pages/bots',{
             bots:info
         })
     }
 })
    
}
const getHistory=(req,res)=>{
    res.render('pages/inicio')
}
const getcontacto=(req,res)=>{
    res.render('pages/contacto')
}
const getLog=(req,res)=>{
    res.render('pages/log')
}
const getPassword=(req,res)=>{
    res.render('pages/password')
}
const getRegistro=(req,res)=>{
    res.render('pages/registro')
}
module.exports={getAllproducts,getHistory,getcontacto,getLog,getPassword,getRegistro}
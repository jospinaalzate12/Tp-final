const mysql2=require('mysql2')
const dataBaseconection=mysql2.createConnection({
    host:'localhost',
    user:'root',
    database:'gourmandises'
}) 
dataBaseconection.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('Conectado a mysql')
    }
})
module.exports=dataBaseconection
/* create database gourmandises
CREATE TABLE products(
    id int NOT null PRIMARY KEY,
    name varchar(50) NOT null,
    description text(300) null,
    imagen varchar(20) null
    );
insert into products(id, name, description,img)
values(1,'papas fritas con chedar y panceta,Riquisimas papas fritas, con queso chedar fundido y panceta crocante.,/img/papas.jpeg),
(2,Pizza en masa madre,Riquisima pizza elaborada con masa madre.,/img/pizzas.jpeg),
(3,Hamburguesa,Hamburguesa con pan de papa, doble chedar.Carne de tapa de asado y rous beef.,/img/burguer.jpeg),
(4,Empanadas de cordero,Riquisimas empanadas de cordero.,/img/empanadas.jpeg);
*/
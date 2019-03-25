const {Materia1,Materia2,Materia3}=require ('./cursos');
const express = require('express')
const app = express()
setTimeout(function(){
 texto=('el nombre del curso es ' +Materia1.nombre+ ' con el id ' +Materia1.id+',tiene una duracion de '+Materia1.duracion+ ' y un valor de '+Materia1.valor );
},2000);
setTimeout(function(){
	console.log('el nombre del curso es ' +Materia2.nombre+' con el id ' +Materia2.id+' ,tiene una duracion de '+Materia2.duracion+ ' y un valor de '+Materia2.valor );
},4000);
setTimeout(function(){
	console.log('el nombre del curso es ' +Materia3.nombre+ ' con el id ' +Materia3.id+' ,tiene una duracion de '+Materia3.duracion+ ' y un valor de '+Materia3.valor );
},6000);


 
app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)
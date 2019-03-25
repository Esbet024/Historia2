
let cursos=[{
	id: 1,
	nombre:'matematicas',
	duracion:'30 hrs',
	valor:300.000
},
{
	id:2,
	nombre:'ingles',
	duracion: '25 hrs',
	valor:360.000
},
{
	id:3,
	nombre:'programacion',
	duracion: '35 hrs',
	valor:500.000
}];



let Materia1 = cursos.find(function(val){
 return val.nombre == 'matematicas'});
let Materia2 = cursos.find(function(val){
 return val.nombre == 'ingles'});
let Materia3 = cursos.find(function(val){
 return val.nombre == 'programacion'});

module.exports={
	Materia1,
	Materia2,
	Materia3
};

//console.log(Materia.nombre);
function validateForm(){
	//Validamos nombre
var nombre = document.getElementById("name").value;


if( nombre == " ") {
	alert("Tiene que ingresar nombre");
	return  false;
}
}
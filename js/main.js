function validateForm(){
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastname").value;
    var correo = document.getElementById("input-email").value; 
    var contrasenia = document.getElementById("input-password").value;
    var withoutOpcion = document.querySelector("select").value;
    
	if (nombre.length == 0 && apellido == 0 && correo == 0 && contrasenia == 0) {
		alert ("Complete los campos obligatorios.");
        
	} else {
       
		if(nombre == null || nombre.length == 0 || nombre == "") {
			alert("Escriba un nombre.");
		} else if ( /[0-9]/.test(nombre)) {
			alert("No ingrese números por favor.");
		} else if ( /^[a-z]/.test(nombre.charAt(0))) {
			alert ("Escriba el primer caracter de su nombre en mayúscula.");
		}
        
        
		if(apellido == null || apellido.length == 0 || apellido == "") {
			alert("Escribe tu apellido.");
		} else if (/[0-9]/.test(apellido)) {
			alert("No ingrese números por favor.");
		} else if (/^[a-z]/.test(apellido.charAt(0))) {
			alert ("Escriba el primer caracter de su apellido en mayúscula.");
		}
        
        var emailFormat=/([a-zA-Z0-9()-_.]+[@]+[a-zA-z0-9]+[.]+[azA-z]+)/;
		if (!emailFormat.test(correo)) {
			alert("Ingrese un correo válido.");
		};
        
        
		if (contrasenia == null || contrasenia.length == 0 || contrasenia == "") {
			alert("Ingresa una contraseña.");
		} else if (contrasenia.length < 6){
			alert("Contraseña no válida, debe tener como mínimo 6 caracteres.");
		}

		if (contrasenia == "123456" || contrasenia == "098754" || contrasenia == "password") {
			alert ("'123456', '098754' y 'password' no son contraseñas válidas, intenta de nuevo por favor.");
		};
        
       
		if (withoutOpcion == 0) {
			alert("Elige tu tipo de bici.");
		}
	};
}
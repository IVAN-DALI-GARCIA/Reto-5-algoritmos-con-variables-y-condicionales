const formulario = document.getElementById('formulario');
const input = document.querySelectorAll('#formulario input');
// var edadDeUsuario = parseInt(document.getElementById('edad').value);

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // valida lo siguinte: letras, numeros, guion y guion_bajo.	
};
const campos = {
	usuario: false,	
	edad: false	
};

const vaidarformulario = (e) =>{
	switch (e.target.name) {
		case "usuario":
			validarcampo(expresiones.usuario,e.target,'usuario');
		break;		
		case "edad":
			validarcampo2('edad');
		break;
	}
};

function validarcampo2(campo) {
	edadDeUsuario = parseInt(document.getElementById('edad').value);
	if (edadDeUsuario >= 18) {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__1__incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__1__correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__error`).classList.remove('formulario__error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__1__incorrecto');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__error`).classList.add('formulario__error-activo');
		campos[campo] = false;
		
	}
	
}
//hacemos la funcio para simplificar el codigo de validacion en cada input, formulario,
const validarcampo = (expresion,input,campo) =>{
	if (expresion.test(input.value)) {
	document.getElementById(`grupo__${campo}`).classList.remove('formulario__1__incorrecto');
	document.getElementById(`grupo__${campo}`).classList.add('formulario__1__correcto');
	document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
	document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
	document.querySelector(`#grupo__${campo} .formulario__error`).classList.remove('formulario__error-activo');
	campos[campo] = true;
	}else{
	document.getElementById(`grupo__${campo}`).classList.add('formulario__1__incorrecto');
	document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
	document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
	document.querySelector(`#grupo__${campo} .formulario__error`).classList.add('formulario__error-activo');
	campos[campo] = false;	
	}
};

input.forEach((inputs) => {
	inputs.addEventListener('keyup', vaidarformulario );
	inputs.addEventListener('blur', vaidarformulario );	
});

formulario.addEventListener('submit',(e) => {
	e.preventDefault();
	if (campos.usuario && campos.edad) {
		formulario.reset();

		document.getElementById('formulario__mensaje_exito').classList.add('formulario__mensaje_exito-activo');
		setTimeout( () => {
		document.getElementById('formulario__mensaje_exito').classList.remove('formulario__mensaje_exito-activo');
		}, 3000);
		document.getElementById('formulario__mesaje').classList.remove('formulario__mesaje-activo');		
		document.querySelector(`#grupo__usuario i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__Telefono i`).classList.remove('fa-check-circle');	
	} else {
		document.getElementById('formulario__mesaje').classList.add('formulario__mesaje-activo');		
	}
});
//-------------------------------- EVENTS -----------------------------------------//
const list = document.getElementById('list');
const btnAdd = document.getElementById('btn-add');  

btnAdd.addEventListener('click', () => {
	const element = `
		<a href="#">
			Elemento <i class="fas fa-check-circle"></i>
		</a>
	`;

	list.innerHTML += element;
});




//--------------------------------- FORM VALIDATION ------------------------------ // 

const formulario = document.getElementById('formulario'); 
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ , // 7 a 14 numeros.
    telefono_prefix_guio: /^[89](\d-\d{3})-\d{2}-\d{2}$/, //93-123-11-33
    telefono_prefix_punts: /^[89](\d-\d.)\d{3}\.\d{3}$/, //93-1.231.1339
    seguridad_social: /^[0-1]{2}-\d{9}$/, //01-123456789
    direccion: /^((C\\)|(Pz\.)|(Av\.))\s.+\.\s\d{1,5}\s-\s\d$/, //C\ Mare de Deu de montserrat. 233 - 2
    fecha: /^([3][0-1]|[0-2][0-9])\/[0-1]?[0-2]\/[1-2]\d{3}$ /, //DD/MM/AAAA
    hora: /^(0[1-9]|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/,  //23:55:55
    target: /^((67\d{2})|(4\d{3})|(5[1-5]\d{2})|(6011))(-?\s?\d{4}){3}|(3[4,7])\ d{2}-?\s?\d{6}-?\s?\d{5}$/, 
    zip: /^\d{5}$/,
}

const campos = {
    usuario: false, 
	nombre: false,
	password: false,
	email: false,
	telefono: false,
    telefono_prefix_guio: false,
    telefono_prefix_punts: false,
    seguridad_social: false,
    direccion:false,
    fecha: false,
    hora: false,
    target: false,
    zip: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'email':   
            validarInput(expresiones.email, e.target, 'email'); 
        break;
        case 'password':
            validarInput(expresiones.password, e.target, 'password'); 
        break; 
        case 'address':
            validarInput(expresiones.nombre, e.target, 'email');  
        break; 
        case 'address2':
            validarInput(expresiones.email, e.target, 'email');  
        break; 
        case 'city':
            validarInput(expresiones.email, e.target, 'email'); 
        break;
        case 'zip':
            validarInput(expresiones.email, e.target, 'email'); 
        break;    
    }
}

const validarInput = (expresion, input, className) => {
    if(expresion.test(input.value)) {
        document.getElementById(`group_${className}`).classList.remove('formulario_incorrecto');
        document.getElementById(`group_${className}`).classList.add('formulario_correcto');
        document.querySelector(`#group_${className} i`).classList.add('fa-check-circle'); 
        document.querySelector(`#group_${className} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group_${className} .formulario_input_error`).classList.remove('formulario_input_error-activo');
        campos[className] = true; 
    } else {
        document.getElementById(`group_${className}`).classList.add('formulario_incorrecto');
        document.getElementById(`group_${className}`).classList.add('formulario_correcto');
        document.querySelector(`#group_${className} i`).classList.add('fa-times-circle'); 
        document.querySelector(`#group_${className} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group_${className} .formulario_input_error`).classList.add('formulario_input_error-activo');
        campos[className] = false; 
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario); 
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    if(campos.email && campos.password) {
        formulario.reset(); 
    }

    /*
    var formData = new FormData(formulario[0]); 
    alert( formData.get('email') + ' - ' + formData.get('address')); 
    */
});
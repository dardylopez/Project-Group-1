/*Validación Nombre*/
function checkNombre(valor){
    if(valor.length<4 | valor.length>30 | !(/[\w\s]$/.test(valor))){
        alert("El nombre tiene que ser de 4 a 30 caracteres máximo, no puede contener numeros y el campo no se deje vacío.")
        return false;
    }else{
        return true;
    }
}
/*Validación Teléfono*/
function checkTelefono(valor){
    if(!(/^[0-9]{7}$/.test(valor))){
        alert("Teléfono no válido")
        return false;
    }else{
        return true;
    }
}

/*validacion de dirección*/
function checkDir(valor){
    if(valor.length<1 | valor.length>50 | !(/[\w\s.#-]{1,50}$/.test(valor))){
        alert("direccion invalida");
        return false;
    }else{
        return true;
    }
}
/* Validación Correo*/
function checkCorreo(value){
    if(!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value))){
        alert("email no válido");
        return false;
    }else{
        return true;
    }
}
//validacion de contraseña
function checkContrasena(value){
    if(!(/^[0-9a-zA-Z]+$/.test(value))){
        alert("contraseña invalida");
        return false;
    }else{
        return true
    }
    }

module.exports={checkNombre, checkTelefono, checkCorreo, checkDir, checkContrasena};


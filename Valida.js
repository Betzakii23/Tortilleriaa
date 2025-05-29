function valida_envia() {
    var form = document.fvalida;

    // nombre
    if (form.nombre.value.trim().length === 0) {
        alert("TIENES QUE ESCRIBIR TU NOMBRE");
        form.nombre.focus();
        return false; 
    }


    if (form.calificacion.value.trim().length === 0) {
        alert("TIENES QUE DAR UNA CALIFICACION");
        form.calificacion.focus();
        return false;
    }


    if (form.precios.value === "Elegir") {
        alert("DEBES ESCOGER SOBRE LOS PRECIOS");
        form.precios.focus();
        return false;  
    }

    
    if (form.satisfaccion.value === "Elegir") {
        alert("TIENES QUE ESCOGER SI ESTAS SATISFECHO.");
        form.satisfaccion.focus();
        return false;  
    }

    
    if (form.porque.value.trim().length === 0){
        alert("ESCRIBE POR QUE");
        form.porque.focus();
        return false;
    }

  

    alert("MUCHAS GRACIAS POR ENVIAR EL FORMULARIO");
    return true;  
}
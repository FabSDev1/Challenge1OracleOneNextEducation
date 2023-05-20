function botonEncriptar(){
    let mensaje = document.getElementById("mensaje").value;
    let elemento = document.getElementsByClassName('resultado-mensaje')[0];
    elemento.style.display = 'block';
    const valido = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(valido.test(mensaje)){ 
        let mensajeEncriptado = encriptar(mensaje);
        document.getElementById("mensaje-generado").innerHTML = mensajeEncriptado;
        //document.getElementById("text").value = "";
    }else{
        alert("Tu mensaje no es valido, escribelo en minusculas y sin acentos.")
    }
}

function botonDesencriptar(){
    let mensaje = document.getElementById("mensaje").value;
    let elemento = document.getElementsByClassName('resultado-mensaje')[0];
    elemento.style.display = 'block';
    const valido = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(valido.test(mensaje)){ 
        let mensajeDesencriptado = desencriptar(mensaje);
        document.getElementById("mensaje-generado").textContent = mensajeDesencriptado;
        //document.getElementById("text").value = "";
    }else{
        alert("Tu mensaje no es valido, escribelo en minusculas y sin acentos.")
    }
}



function encriptar(mensaje){
    let formandoPalabra = [];
    let textoSeparado = mensaje.split("");
    for(let c = 0; c<textoSeparado.length;c++){
        let letra = textoSeparado[c];
        switch (letra){
            case "e":
                formandoPalabra.push("enter");
                break;
            case "i":
                formandoPalabra.push("imes");
                break;
            case "a":
                formandoPalabra.push("ai");
                break;
            case "o":
                formandoPalabra.push("ober");
                break;
            case "u":
                formandoPalabra.push("ufat");
                break;
            default:
                formandoPalabra.push(letra);
                break;
        }
    }
    desaparecer();
    return formandoPalabra.join("");
}

function desencriptar(mensaje){
    let textoDesencriptado = mensaje;
    textoDesencriptado = textoDesencriptado.replace(/ober/g, "o");
    textoDesencriptado = textoDesencriptado.replace(/ai/g, "a");
    textoDesencriptado = textoDesencriptado.replace(/enter/g, "e");
    textoDesencriptado = textoDesencriptado.replace(/imes/g, "i");
    textoDesencriptado = textoDesencriptado.replace(/ufat/g, "u");
    desaparecer();
    return textoDesencriptado;
}


function desaparecer(){
    document.getElementById("munehco").style.display = "none";
    document.getElementById("mensaje-inencontrado").style.display = "none";
    document.getElementById("boton-copiar").style.display = "inline-block";
}

function copiar(){
    const copiarTexto = document.getElementById("mensaje-generado").innerText;
    navigator.clipboard.writeText(copiarTexto)
    .then(() => {
        console.log('Texto copiado con éxito!');
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

var uno = document.getElementById("resultadoUno");
var dos = document.getElementById("resultadoDos");
var tres = document.getElementById("resultadoTres");
var usuario = document.getElementById("precio");
boton_Max.addEventListener("click", resultadoMax);



function resultadoMax() {
    var unoR = usuario.value * 0.05;
    unoR = Math.ceil(unoR);
    resultadoUno.innerHTML = unoR;
    var dosR = usuario.value * 0.06;
    dosR = Math.ceil(dosR);
    resultadoDos.innerHTML = dosR;
    var tresR = usuario.value * 0.07;
    tresR = Math.ceil(tresR);
    resultadoTres.innerHTML = tresR;
}





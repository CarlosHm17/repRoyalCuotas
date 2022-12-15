var uno = document.getElementById("resultadoUno");
var dos = document.getElementById("resultadoDos");
var tres = document.getElementById("resultadoTres");
var down = document.getElementById("downPayment");
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
    var cuotaI = usuario.value * 0.10;
    cuotaI = Math.ceil(cuotaI);
    downPayment.innerHTML = cuotaI;
}

var refUno = document.getElementById("referenciaUno");
var refDos = document.getElementById("referenciaDos");
var refTres = document.getElementById("referenciaTres");
var refResul = document.getElementById("resultadoRef");
boton_Ref.addEventListener("click", resultadoReferencia);

function resultadoReferencia() {
    var rU = Number(refUno.value);
    var rD = Number(refDos.value);
    var rT = Number(refTres.value);
    var refTotal = rU + rD + rT;
    refTotal = Math.ceil(refTotal);
    resultadoRef.innerHTML = refTotal * 5;
}





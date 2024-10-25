var titulo = document.querySelector(".titulo");
titulo.textContent = "Medola's Nutricion";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if (!pesoValido) {
        console.log("Peso Inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("peso__invalido")
    }
    
    if (!alturaValido) {
        console.log("Altura Inválida!");
        alturaValido = false;
        if (tdImc.textContent === "Peso Inválido!") {
            tdImc.textContent = "Peso e Altura Inválidos!";
            paciente.classList.add("peso-altura__invalido");
        } else {
            tdImc.textContent = "Altura Inválida!";
            paciente.classList.add("altura__invalido");
        }
    }

    if (pesoValido && alturaValido) {
        var imc = calculaImc(peso,altura)
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2)
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3.0) {
        return true;
    }
    else {
        return false;
    }
}
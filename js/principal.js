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

    var pesoValido = true;
    var alturaValido = true;

    if (peso <= 0 || peso >= 600) {
        console.log("Peso Inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("peso__invalido")
    }
    
    if (altura <= 0 || altura >= 2.50) {
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
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});
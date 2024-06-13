async function sortear(){

// pegar total de resultado 
const totalResultador =Number(document.querySelector('#totalResultadosInput').value)



//pegar o menor valor 

const menorValor = Number(document.querySelector('#menorValorInput').value)


//pegar o maior valor 
const maiorValor = Number (document.querySelector('#maiorValorInput').value)


for(let j = 0; j < 50; j++){
//limpar resultado 

const elementoHTMLResultValues = document.querySelector('.results-values')
elementoHTMLResultValues.innerHTML = ''





for (let i = 0; i < totalResultador; i++ ){

//Gerar um numero aleatorio entre o maior e o menor valor 
const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor
console.log(resultado)


//Gerar um elemnto em HTMl para o resultado
const elementoHTMLDoResultado = document.createElement('div')
elementoHTMLDoResultado.classList.add('result-value')
elementoHTMLDoResultado.innerText = resultado


//adicionar o elemento criatodo dentro do html existente 

elementoHTMLResultValues.append(elementoHTMLDoResultado)

}

await wait(0)

}
}

function wait(tempo){
return new Promise((resolve) => {

 setTimeout(() => resolve(0), tempo);

})

}


function participate() {
    var numberInput = document.getElementById("number-input");
    var nameInput = document.getElementById("name-input");

    var number = numberInput.value;
    var name = nameInput.value;

    if (participants[number]) {
        alert("O número " + number + " já foi escolhido por outro participante. Por favor, escolha outro número.");
    } else {
        participants[number] = name;
        localStorage.setItem('participants', JSON.stringify(participants));
        alert("Seu ponto foi marcado na rifa!");
    }

    numberInput.value = "";
    nameInput.value = "";

    updateNumbersTable();
}

function updateNumbersTable() {
    var numbersTable = "<table><tbody>";
    var count = 1;
    for (var i = 0; i < 10; i++) { // 10 rows
        numbersTable += "<tr>";
        for (var j = 0; j < 10; j++) { // 10 columns
            var cellClass = participants[count] ? "occupied" : "available";
            numbersTable += "<td class='" + cellClass + "' onclick='showParticipantName(" + count + ")'>" + count + "</td>";
            count++;
        }
        numbersTable += "</tr>";
    }
    numbersTable += "</tbody></table>";
    document.getElementById("table-container").innerHTML = numbersTable;
}

function showParticipantName(number) {
    var participantName = participants[number];
    if (participantName) {
        alert("Nome do participante: " + participantName);
    }
}

window.onload = function() {
    updateNumbersTable();
};


var participants = JSON.parse(localStorage.getItem('participants')) || {};

function participate() {
    var numberInput = document.getElementById("number-input");
    var nameInput = document.getElementById("name-input");

    var number = numberInput.value;
    var name = nameInput.value;

    if (participants[number]) {
        alert("O número " + number + " já foi escolhido por outro participante. Por favor, escolha outro número.");
    } else {
        participants[number] = name;
        localStorage.setItem('participants', JSON.stringify(participants));
        alert("Seu ponto foi marcado na rifa!");
    }

    numberInput.value = "";
    nameInput.value = "";

    updateNumbersTable();
}

function updateNumbersTable() {
    var numbersTable = "<table><tbody>";
    var count = 1;
    for (var i = 0; i < 10; i++) { // 10 rows
        numbersTable += "<tr>";
        for (var j = 0; j < 10; j++) { // 50 columns
            var cellClass = participants[count] ? "occupied" : "available";
            numbersTable += "<td class='" + cellClass + "' onclick='showParticipantName(" + count + ")'>" + count + "</td>";
            count++;
        }
        numbersTable += "</tr>";
    }
    numbersTable += "</tbody></table>";
    document.getElementById("table-container").innerHTML = numbersTable;
}

function showParticipantName(number) {
    var participantName = participants[number];
    if (participantName) {
        alert("Nome do participante: " + participantName);
    }
}

window.onload = function() {
    updateNumbersTable();
};

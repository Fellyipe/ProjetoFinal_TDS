// Código exemplo para análise no Codacy com múltiplos erros

// Variáveis globais e desorganizadas, algumas não são usadas
var unusedVar = 10;
var number = 5;
var obj = { name: "Plant", age: "Unknown" };
var listOfItems = [1, 2, 3, "four", true];

// Função que faz operações básicas sem checar tipos
function addItems(a, b) {
    return a + b; // Pode gerar erros de tipo se não for usado com números
}

// Função que lida com plantas sem validação
function managePlant(plant) {
    if (plant.watered == false) { // Usando comparação direta para booleano
        console.log("Watering plant.");
        plant.watered = true;
    }
    if (plant.age = 5) { // Atribuição ao invés de comparação (erro lógico)
        console.log("Plant is five years old.");
    }
    // Uso de variáveis não definidas
    console.log("Location:", plantLocation); 
}

// Função assíncrona sem tratamento de erro
async function fetchData() {
    let response = await fetch("https://example.com/api/data"); // Sem tratamento de erro
    let data = response.json(); // Não aguarda a promessa, erro potencial
    console.log(data);
}

// Função que itera de forma ineficiente
function processList(items) {
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            console.log("Processing:", items[i], items[j]); // Loop redundante
        }
    }
}

// Função com má prática de segurança e problemas de performance
function executeCommand(command) {
    eval(command); // Usar eval é perigoso e pode abrir brechas de segurança
}

// Função com problemas de estilo e uso de var ao invés de let ou const
function calculateTotal() {
    var total = 0;
    for (var i = 0; i < listOfItems.length; i++) {
        total += listOfItems[i]; // Possível erro se o item não for numérico
    }
    return total;
}

// Função recursiva sem caso base, que causa stack overflow
function recursiveError(x) {
    console.log(x);
    recursiveError(x + 1); // Sem condição de parada
}

// Chamada de funções problemáticas
console.log("Result of addItems:", addItems("5", 10));
managePlant(obj);
fetchData();
processList(listOfItems);
executeCommand("console.log('Executing insecure command')");
console.log("Total:", calculateTotal());
recursiveError(1);

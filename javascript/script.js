//variaveis
let numero1, numero2, resultado1;

function somar(){
//entrada 
numero1 = parseInt(document.getElementById("numero1").value);
numero2 = parseInt(document.getElementById("numero2").value);

//processamento
resultado1 = numero1 + numero2;

//saida
document.getElementById("resultado1").innerHTML = "Resutado" + resultado1;
}

let Celsius, F;

function Converter(){
    //entrada
    Celsius = parseFloat(document.getElementById("Celsius").value);
    //processamento
    F = (Celsius * 9 / 5 ) + 32
    //Saida
    document.getElementById("resultado2").innerHTML = "F =" + F;

}

let Raio, Altura, Volume;

function Formula(){
    //entrada
    Raio = parseFloat(document.getElementById ("Raio").value);
    Altura = parseFloat(document.getElementById ("Altura").value);
    //Processamento
    Volume = 3.14159 * Raio ** 2 * Altura
    //Saida
    document.getElementById("resultado3").innerHTML = "O Volume da lata é  " + Volume;
}

let Comprimento, Largura, Altura1, Volume1;

function Calculo(){
    //Entrada
    Comprimento = parseFloat(document.getElementById("Comprimento").value);
    Largura = parseFloat(document.getElementById ("Largura").value);
    Altura1 = parseFloat(document.getElementById ("Altura1").value)
    //Processamento
    Volume1 = Comprimento * Largura * Altura1;
    //Saida
    document.getElementById("resultado4").innerHTML = "O volume da Caixa é " + Volume1;
}

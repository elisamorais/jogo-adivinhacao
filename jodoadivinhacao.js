var readline = require('readline-sync') 

var chute = 0;
var numeroTentativas = 0;

console.log("Sorteando um número.....");
var segredo = gerarNumeroAleatorio(1, 10);

console.log("===== Começou o jogo! ===== Tente adivinhar o número a ser sorteado...");
console.log("\n");



while (chute != segredo) {
	numeroTentativas++;
	
	console.log("Tentativa :" + numeroTentativas);
	chute = readline.questionInt("Chute um número: ");

	if(chute > segredo){
		console.log("\n>> O número sorteado é menor.\n");
	}
	else if (chute < segredo){
		console.log("\n>> O número sorteado é maior\n");
	}
	
}
console.log("Parabéns! Você acertou miseravi, na tentativa ." + numeroTentativas);









function gerarNumeroAleatorio(min, max) {
	return (Math.floor(Math.random() * (max - min)) + min)
}
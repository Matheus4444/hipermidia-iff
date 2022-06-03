var numero = window.prompt("Insira um número.");
fatorial(numero);

function fatorial(numero) {
	let numeral = 1;		
	for (i = 1; i <= numero; i++) {
		numeral *= i;
	}
	return alert("O fatorial de " + numero + " é " + numeral);
}
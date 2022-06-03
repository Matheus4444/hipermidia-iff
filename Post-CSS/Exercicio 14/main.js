var numero = window.prompt("Insira um número");
parImpar(numero);

function parImpar(numero) {
	if (numero % 2 == 0) {
		return alert("O número é par.");
	}else {
		return alert("O número é ímpar.");
	}
}
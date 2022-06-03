var palavra = window.prompt("Insira uma palavra.");
palindromo(palavra);

function palindromo(palavra) {
	if (palavra == palavra.split('').reverse().join('')) {
		return alert("A palavra é um palíndromo.");
	}else {
		return alert("A palavra não é um palíndromo.");
	}
}
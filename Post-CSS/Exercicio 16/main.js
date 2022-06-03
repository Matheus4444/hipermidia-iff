var email = window.prompt("Insira seu e-mail.");
validador(email);

function validador(email) {
	let formatacao = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (formatacao.test(email)) {
		return alert("E-mail válido.");
	}else{
		return alert("E-mail inválido.");
	}
}
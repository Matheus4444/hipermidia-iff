function calcularTaxa() {
	let cidade1 = document.querySelector('input[name="cidade"]:checked').value;
	let cidade2 = document.querySelector('input[name="cidade2"]:checked').value;
	let total = document.querySelector('input[name="carro"]:checked').value;
	
	if (cidade1 != cidade2) {
		total = parseInt(total) + 300;
	}
	
	document.getElementById("resultado").innerHTML = "O valor total é: " + total;
}
function handleForm(event) { 
	event.preventDefault(); 
} 
document.getElementById("myForm").addEventListener('submit', handleForm);
function adicionarItem() {
	var item = document.getElementById("adicionador").value;
	var menu = document.getElementById("menu").innerHTML;
	menu = menu +"<li>" + item + "</li>";

	document.getElementById("menu").innerHTML = menu;
}
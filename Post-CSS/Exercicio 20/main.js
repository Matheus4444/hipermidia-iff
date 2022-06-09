function mudarImg() {
	let item = document.querySelector("#img");
    let classe = document.querySelector("#img").class;
    if(classe=="desligada"){
        item.innerHTML = "<img src=\"imagens\\lampada_on.gif\">";
        document.querySelector('div').class = 'ligada';
    }else{
        item.innerHTML = "<img src=\"imagens\\lampada_off.gif\">";
        document.querySelector('div').class = 'desligada';
    }
}
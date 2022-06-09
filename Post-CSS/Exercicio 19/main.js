function atualizar(){
	const val = document.querySelector('input').value;
    const inputVal = document.querySelector('#espaco');
    inputVal.innerHTML = val;
    console.log(val);
}
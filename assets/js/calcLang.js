function changeLanguage() {
    let checkbox = document.querySelector('.langBtn');
    const answ = document.querySelector('.answer');
    const sub = document.querySelector('.submit');
    const rtn = document.querySelector('.rtn');

    console.log(checkbox.checked)

    if(checkbox.checked){
        answ.innerHTML = 'Responda';
        sub.innerHTML = 'Enviar';
        rtn.innerHTML = 'Retornar';
    }

    checkbox.addEventListener('click', function(){
        if (checkbox.checked){
            answ.innerHTML = 'Responda';
            sub.innerHTML = 'Enviar';
            rtn.innerHTML = 'Retornar';
        } else {
            answ.innerHTML = 'Answer';
            sub.innerHTML = 'Submit';
            rtn.innerHTML = 'Return';
        }
    });
}

changeLanguage();
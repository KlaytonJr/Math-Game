function changeLanguage() {
    let checkbox = document.querySelector('.langBtn');
    const h1 = document.querySelector('h1');
    const buttonStart = document.querySelector('.start');
    const buttonScore = document.querySelector('.score');

    console.log(checkbox.checked)

    if(checkbox.checked){
        h1.innerHTML = 'Treinando Matemática';
        buttonStart.innerHTML = 'Começar';
        buttonScore.innerHTML = 'Pontuação';
    }

    checkbox.addEventListener('click', function(){
        if (checkbox.checked){
            h1.innerHTML = 'Treinando Matemática';
            buttonStart.innerHTML = 'Começar';
            buttonScore.innerHTML = 'Pontuação';
        } else {
            h1.innerHTML = 'Math Game';
            buttonStart.innerHTML = 'Start';
            buttonScore.innerHTML = 'Score';
        }
    });
}

changeLanguage();
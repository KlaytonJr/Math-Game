function changeLanguage() {
    let checkbox = document.querySelector('.langBtn');
    const h1 = document.querySelector('h1');
    const btnAdt = document.querySelector('.addition');
    const btnSub = document.querySelector('.subtraction');
    const btnMult = document.querySelector('.multiplication');
    const btnDiv = document.querySelector('.division');

    console.log(checkbox.checked)

    if(checkbox.checked){
        h1.innerHTML = 'Selecione uma Operação';
        btnAdt.innerHTML = 'Adição';
        btnSub.innerHTML = 'Subtração';
        btnMult.innerHTML = 'Multiplicação';
        btnDiv.innerHTML = 'Divisão';
    }

    checkbox.addEventListener('click', function(){
        if (checkbox.checked){
            h1.innerHTML = 'Selecione uma Operação';
            btnAdt.innerHTML = 'Adição';
            btnSub.innerHTML = 'Subtração';
            btnMult.innerHTML = 'Multiplicação';
            btnDiv.innerHTML = 'Divisão';
        } else {
            h1.innerHTML = 'Select an Operation';
            btnAdt.innerHTML = 'Addition';
            btnSub.innerHTML = 'Subtraction';
            btnMult.innerHTML = 'Multiplication';
            btnDiv.innerHTML = 'Division';
        }
    });
}

changeLanguage();
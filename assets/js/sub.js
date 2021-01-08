const calc = document.querySelector('.calculation');
const p = document.querySelector('p');

function aleatory(){
    const max = 99;
    const min = 1;
    return Math.floor(Math.random(min, max) * (max - min)) + min;
}

function sub () {
    let num1 = aleatory();
    let num2 = aleatory();

    if (num1 > num2){
        calc.innerHTML = `${num1} - ${num2}`;
        return num1 - num2;
    } else {
        calc.innerHTML = `${num2} - ${num1}`;
        return num2 - num1;
    }
}

const resultado = sub();

const capture = document.querySelector('#answer');
const button = document.querySelector('.btn');
const nextButton = document.querySelector('.btn-next');

let check = document.querySelector('.langBtn');

    button.addEventListener('click', function(){
    
        if(check.checked){
            if(Number(capture.value) === resultado){
                p.innerHTML = 'Certo';
                p.style.backgroundColor = '#00cd3a';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Próximo';
                button.disabled = true;
            } else {
                p.innerHTML = `Errado o certo é ${resultado}`;
                p.style.backgroundColor = 'red';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Próximo';
                button.disabled = true;
            }
        } else {
            if(Number(capture.value) === resultado){
                p.innerHTML = 'Correct';
                p.style.backgroundColor = '#00cd3a';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Next';
                button.disabled = true;
            } else {
                p.innerHTML = `Incorrect the correct is ${resultado}`;
                p.style.backgroundColor = 'red';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Next';
                button.disabled = true;
            }
        }

        check.addEventListener('click', function(){
            if (check.checked){
                if(Number(capture.value) === resultado){
                    p.innerHTML = 'Certo';
                    p.style.backgroundColor = '#00cd3a';
                    nextButton.style.visibility = 'visible';
                    nextButton.innerHTML = 'Próximo';
                    button.disabled = true;
                } else {
                    p.innerHTML = `Errado o certo é ${resultado}`;
                    p.style.backgroundColor = 'red';
                    nextButton.style.visibility = 'visible';
                    nextButton.innerHTML = 'Próximo';
                    button.disabled = true;
                }
            } else {
                if(Number(capture.value) === resultado){
                    p.innerHTML = 'Correct';
                    p.style.backgroundColor = '#00cd3a';
                    nextButton.style.visibility = 'visible';
                    nextButton.innerHTML = 'Next';
                    button.disabled = true;
                } else {
                    p.innerHTML = `Incorrect the correct is ${resultado}`;
                    p.style.backgroundColor = 'red';
                    nextButton.style.visibility = 'visible';
                    nextButton.innerHTML = 'Next';
                    button.disabled = true;
                }
            }
        });
    });

nextButton.addEventListener('click', function(){
    capture.value = ' ';
});
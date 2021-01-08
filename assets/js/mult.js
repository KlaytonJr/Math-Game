const calc = document.querySelector('.calculation');
const p = document.querySelector('p');

function aleatory(){
    const max = 99;
    const min = 1;
    return Math.floor(Math.random(min, max) * (max - min)) + min;
}

function mult () {
    let num1 = aleatory();
    let num2 = aleatory();

    calc.innerHTML = `${num1} x ${num2}`;
    return num1 * num2;
}

const resultado = mult();

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
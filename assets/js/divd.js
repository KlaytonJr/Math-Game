const calc = document.querySelector('.calculation');
const p = document.querySelector('p');

function aleatory(){
    const max = 99;
    const min = 1;
    return Math.floor(Math.random(min, max) * (max - min)) + min;
}

function divd () {
    let num1 = aleatory();
    let num2 = aleatory();

    let resultado = num1 / num2;

    console.log(resultado);

    calc.innerHTML = `${num1} / ${num2}`;
    return resultado;
    
}

let resultadoDiv;

do {
    resultadoDiv = divd();

} while (!Number.isInteger(resultadoDiv));

console.log(resultadoDiv);

const capture = document.querySelector('#answer');
const button = document.querySelector('.btn');
const nextButton = document.querySelector('.btn-next');

let check = document.querySelector('.langBtn');

    button.addEventListener('click', function(){
    
        if(check.checked){
            if(Number(capture.value) === resultadoDiv){
                p.innerHTML = 'Certo';
                p.style.backgroundColor = '#00cd3a';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Próximo';
                button.disabled = true;
            } else {
                p.innerHTML = `Errado o certo é ${resultadoDiv}`;
                p.style.backgroundColor = 'red';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Próximo';
                button.disabled = true;
            }
        } else {
            if(Number(capture.value) === resultadoDiv){
                p.innerHTML = 'Correct';
                p.style.backgroundColor = '#00cd3a';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Next';
                button.disabled = true;
            } else {
                p.innerHTML = `Incorrect the correct is ${resultadoDiv}`;
                p.style.backgroundColor = 'red';
                nextButton.style.visibility = 'visible';
                nextButton.innerHTML = 'Next';
                button.disabled = true;
            }
        }

        check.addEventListener('click', function(){
            if (check.checked){
                if(Number(capture.value) === resultadoDiv){
                    p.innerHTML = 'Certo';
                    p.style.backgroundColor = '#00cd3a';
                    nextButton.style.visibility = 'visible';
                    nextButton.innerHTML = 'Próximo';
                    button.disabled = true;
                } else {
                    p.innerHTML = `Errado o certo é ${resultadoDiv}`;
                    p.style.backgroundColor = 'red';
                    nextButton.style.visibility = 'visible';
                    nextButton.innerHTML = 'Próximo';
                    button.disabled = true;
                }
            } else {
                if(Number(capture.value) === resultadoDiv){
                    p.innerHTML = 'Correct';
                    p.style.backgroundColor = '#00cd3a';
                    nextButton.style.visibility = 'visible';
                    nextButton.innerHTML = 'Next';
                    button.disabled = true;
                } else {
                    p.innerHTML = `Incorrect the correct is ${resultadoDiv}`;
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
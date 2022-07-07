/* let userName = prompt('Qual é o seu nome?');

if(userName === "undefined" || userName === "" || Number(userName)) {
    alert('Digite um nome válido');
    window.location.reload();
}
 */

let userName = "Maria";


function selectModel(element) {
    let catchCircle = document.querySelector('.model .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');
}

function selectCollar(element) {
    const catchCircle = document.querySelector('.collar .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');
}

function selectTissue(element) {
    const catchCircle = document.querySelector('.tissue .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');
}
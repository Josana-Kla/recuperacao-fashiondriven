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

    //document.querySelector('.small-lines span').nextElementSibling // pega o paragrafo

    turnsBlueButton();
}

function selectCollar(element) {
    const catchCircle = document.querySelector('.collar .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');

    turnsBlueButton();
}

function selectTissue(element) {
    const catchCircle = document.querySelector('.tissue .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');

    turnsBlueButton();
}

function checkReferenceImage() {
    let catchValueImageReference = document.querySelector('.big-line input').value;
    let linkIsValid = catchValueImageReference.startsWith('https://') || catchValueImageReference.startsWith('http:/');
    
    if(catchValueImageReference !== "" && linkIsValid) {
        console.log(true);
    } else {
        alert("Insira um link válido de referência");
    }
}


function turnsBlueButton() {
    
    console.log("ainda não");
    console.log(selectModel, selectCollar, selectTissue);
    
}


function finishOrder() {
    
    //checkReferenceImage();

}
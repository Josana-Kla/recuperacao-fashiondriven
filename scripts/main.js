/* let userName = prompt('Qual é o seu nome?');

if(userName === "undefined" || userName === "" || Number(userName)) {
    alert('Digite um nome válido');
    window.location.reload();
}
 */

let userName = "Maria";
let modelSelectedByUser;
let collarSelectedByUser;
let tissueSelectedByUser;

function selectModel(element) {
    modelSelectedByUser = element.nextElementSibling.innerHTML;
    const catchCircle = document.querySelector('.model .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');

}

function selectCollar(element) {
    collarSelectedByUser = element.nextElementSibling.innerHTML;
    const catchCircle = document.querySelector('.collar .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');

}

function selectTissue(element) {
    tissueSelectedByUser = element.nextElementSibling.innerHTML;
    const catchCircle = document.querySelector('.tissue .border-circle-blue');

    if(catchCircle !== null) {
        catchCircle.classList.remove('border-circle-blue');
    }

    element.classList.add('border-circle-blue');

    /* collarSelectedByUser = element.nextElementSibling.innerHTML;
    console.log(collarSelectedByUser) */

}

function turnsBlueButton() {
    let catchValueImageReference = document.querySelector('.big-line input');
    let catchButton = document.querySelector('.big-line button');
    let linkIsValid = catchValueImageReference.value.startsWith('https://') || catchValueImageReference.value.startsWith('http:/');
    let linkIsAnImage = catchValueImageReference.value.includes('.jpg') || catchValueImageReference.value.includes('.jpeg') || catchValueImageReference.value.includes('.svg') || catchValueImageReference.value.includes('.png') || catchValueImageReference.value.includes('.bmp') || catchValueImageReference.value.includes('.tiff') || catchValueImageReference.value.includes('.raw');
   
    if(modelSelectedByUser !== undefined && collarSelectedByUser !== undefined && tissueSelectedByUser !== undefined && catchValueImageReference.value !== "" && linkIsValid && linkIsAnImage) {
        catchButton.classList.add('button-blue');
    } else {
        catchValueImageReference.value = "";
        catchButton.classList.remove('button-blue');
        alert("Insira um link válido para a referência");
    }
}


function finishOrder() {
    //se der certo - alert confirmando a encomenda; e envia p servidor
    //se der errado - alert "Ops, não conseguimos processar sua encomenda"
    

}
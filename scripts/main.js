/* let userName = prompt('Qual é o seu nome?');

function getUserName() {
    while (userName === "undefined" || userName === "" || userName === null || Number(userName) || userName === "true" || userName === "false") {
        alert('Digite um nome válido');
        userName = prompt('Qual é o seu nome?');
    }
}


getUserName(); */
let userName = "Bia";
let modelSelectedByUser;
let collarSelectedByUser;
let tissueSelectedByUser;

let orderIsAllRight;
let imageReferenceUrl;

let objectModelToOrder;


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
}


function turnsBlueButton() {
    let catchValueImageReference = document.querySelector('.big-line input');
    const catchButton = document.querySelector('.big-line button');
    const linkIsValid = catchValueImageReference.value.startsWith('https://') || catchValueImageReference.value.startsWith('http:/');
    const linkIsAnImage = catchValueImageReference.value.includes('.jpg') || catchValueImageReference.value.includes('.jpeg') || catchValueImageReference.value.includes('.svg') || catchValueImageReference.value.includes('.png') || catchValueImageReference.value.includes('.bmp') || catchValueImageReference.value.includes('.tiff') || catchValueImageReference.value.includes('.raw');
   
    if(modelSelectedByUser !== undefined && collarSelectedByUser !== undefined && tissueSelectedByUser !== undefined && catchValueImageReference.value !== "" && linkIsValid && linkIsAnImage) {
        catchButton.classList.add('button-blue');
        imageReferenceUrl = catchValueImageReference.value;
        orderIsAllRight = true;
    } else {
        catchValueImageReference.value = "";
        catchButton.classList.remove('button-blue');
        alert("Insira um link válido para a referência");
    }
}

function changeModelNamesToEnglish() {
    if(modelSelectedByUser === "T-shirt") {
        modelSelectedByUser = modelSelectedByUser.toLowerCase();
    } else if(modelSelectedByUser === "Camiseta") {
        modelSelectedByUser = "top-tank";
    } else if(modelSelectedByUser === "Manga longa") {
        modelSelectedByUser = "long";
    }
}

function changeCollarNamesToEnglish() {
    if(collarSelectedByUser === "Gola V") {
        collarSelectedByUser = "v-neck";
    } else if(collarSelectedByUser === "Gola redonda") {
        collarSelectedByUser = "round";
    } else if(collarSelectedByUser === "Gola polo") {
        collarSelectedByUser = "polo";
    }
}

function changeTissueNamesToEnglish() {
    if(tissueSelectedByUser === "Seda") {
        tissueSelectedByUser = "silk";
    } else if(tissueSelectedByUser === "Algodão") {
        tissueSelectedByUser = "cotton";
    } else if(tissueSelectedByUser === "Poliéster") {
        tissueSelectedByUser = "polyester";
    }
}


function finishOrder(element) {
    if(orderIsAllRight === true) { 
        alert(`
            Seu pedido:
            - Modelo: ${modelSelectedByUser},
            - Gola: ${collarSelectedByUser},
            - Tecido: ${tissueSelectedByUser}
        `)

        changeModelNamesToEnglish();
        changeCollarNamesToEnglish();
        changeTissueNamesToEnglish();

        objectModelToOrder = {  
            "model": modelSelectedByUser,
            "neck": collarSelectedByUser,
            "material": tissueSelectedByUser,
            "image": imageReferenceUrl,
            "owner": userName,
            "author": userName 
        }

        sendOrderToServer();
    }
}



function sendOrderToServer() {
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', objectModelToOrder);
    promise.then(successOrderAnswer);
    promise.catch(errorOrderAnswer);
}

function successOrderAnswer(response) {
    alert("Sua encomenda foi realizada com sucesso!");
    console.log(response.status);
    console.log(response);
}

function errorOrderAnswer(erro) {
    alert("Ops, não conseguimos processar sua encomenda");
    console.log(erro.response.status);
    console.log(erro.response.data);
}

let allUsersCreations = [];

getOthersCriation();
function getOthersCriation() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promise.then(catchResponse);
    promise.catch(showErrorGetCriations);
}

function catchResponse(response) {
    allUsersCreations = response.data;
    console.log(allUsersCreations);
    showOthersCriation();
}

function showOthersCriation() {
    let catchLineLastOrderes = document.querySelector('.last-orderes .line-last-orderes');

    for(i = 0; i < allUsersCreations.length; i++) {
        catchLineLastOrderes.innerHTML += `
            <div>
                <img src="${allUsersCreations[i].image}">
                <p><strong>Criador: </strong>${allUsersCreations[i].owner}</p>
            </div>
        `
    }

    console.log(catchLineLastOrderes);
}

function showErrorGetCriations() {

}
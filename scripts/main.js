//let userName = prompt('Qual é o seu nome?');

let userName = "Dakota";

let modelSelectedByUser;
let collarSelectedByUser;
let tissueSelectedByUser;

let orderIsAllRight;
let imageReferenceUrl;

let objectModelToOrder;

let allUsersCreations = [];

let catchUrlImageSelected;
let catchCreatorSelected;
let hasAnUrl;

//getUserName();
getOthersCriation();



function getUserName() {
    while (userName === "undefined" || userName === "" || userName === null || Number(userName) || userName === "true" || userName === "false") {
        alert('Digite um nome válido');
        userName = prompt('Qual é o seu nome?');
    }
}

function selectClotheOptions(element, type) {
    modelSelectedByUser = element.nextElementSibling.innerHTML;
    const catchCircle = document.querySelector(`.${type} .border-circle-blue`);

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
    imageReferenceUrl = catchValueImageReference.value;

    if(modelSelectedByUser !== undefined && collarSelectedByUser !== undefined && tissueSelectedByUser !== undefined && linkIsValid && linkIsAnImage && catchValueImageReference.value !== "") {
        for(let i = 0; i < imageReferenceUrl.length; i++) {
            catchButton.classList.add('button-blue');
            hasAnUrl = true;
            orderIsAllRight = true;
        }
    } else {
        catchValueImageReference.value = "";
        catchButton.classList.remove('button-blue');
        hasAnUrl = false;
        orderIsAllRight = false;
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
    if(orderIsAllRight === true && hasAnUrl === true) { 
        alert(`
            Seu pedido:
            - Modelo: ${modelSelectedByUser},
            - Gola: ${collarSelectedByUser},
            - Tecido: ${tissueSelectedByUser}
        `)

        objectModel();
        sendOrderToServer();
    }
}

function objectModel() {
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
    window.location.reload();
}

function errorOrderAnswer(erro) {
    alert("Ops, não conseguimos processar sua encomenda");
    console.log(erro.response.status);
    console.log(erro.response.data);
}



function getOthersCriation() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promise.then(catchResponse);
    promise.catch(showErrorGetCriations);
}

function catchResponse(response) {
    allUsersCreations = response.data;
    showOthersCriation();
}

function showOthersCriation() {
    let catchLineLastOrderes = document.querySelector('.last-orderes .line-last-orderes');

    for(i = 0; i < allUsersCreations.length; i++) {
        catchLineLastOrderes.innerHTML += `
            <div onclick="selectOtherUserCreation(this)">
                <img src="${allUsersCreations[i].image}">
                <p><strong>Criador: </strong><em>${allUsersCreations[i].owner}</em></p>
            </div>
        `
    }
}

function showErrorGetCriations(erro) {
    alert("Ops, não foi possível listar os últimos pedidos dos outros usuários");
    console.log(erro.response.status);
    console.log(erro.response.data);
}

function selectOtherUserCreation(element) {
    const confirmOrder = confirm("Clique em OK para confirmar seu pedido");
    catchUrlImageSelected = element.querySelector('img').src;
    catchCreatorSelected = element.querySelector('p em').innerHTML;

    if(confirmOrder === true) {
        catchClotheSelected();
    }
}

function catchClotheSelected() {
    for(let i = 0; i < allUsersCreations.length; i++) {
        if(allUsersCreations[i].image === catchUrlImageSelected && allUsersCreations[i].owner === catchCreatorSelected) {
            objectModelToOrder = {  
                "model": allUsersCreations[i].model,
                "neck": allUsersCreations[i].neck,
                "material": allUsersCreations[i].material,
                "image": allUsersCreations[i].image,
                "owner": allUsersCreations[i].owner,
                "author": userName
            }
        }
    }
    orderClotheOtherUserSelected();
}

function orderClotheOtherUserSelected() {
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', objectModelToOrder);
    promise.then(successOrderAnswer);
    promise.catch(errorOrderClotheSelected);
}

function errorOrderClotheSelected(erro) {
    console.log(erro.response.status);
    console.log(erro.response.data);
}
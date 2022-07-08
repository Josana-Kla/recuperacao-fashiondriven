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
}
let imageReferenceUrl;
let orderIsAllRight;
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

/* let objectModelToOrder = { 
    `
        model: ${modelSelectedByUser},
        neck: ${collarSelectedByUser},
        material: ${tissueSelectedByUser},
        image: ${imageReferenceUrl},
        owner: "oii",
        author: "euu"
    `
} */




let objectModelToOrder;


function finishOrder(element) {
    if(orderIsAllRight === true) {
        
        
        alert(`
            Encomenda confirmada com sucesso!
            Você pediu:
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
            "author": "nonee" 
        }

        console.log(objectModelToOrder);
        //manda p servidor
    }
    //se der certo - alert confirmando a encomenda; e envia p servidor
    //se der errado - alert "Ops, não conseguimos processar sua encomenda" 
}






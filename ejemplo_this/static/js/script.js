
function turnOff(element){
    if (element.innerText == "Login"){
        element.innerText = "Logout";
    } else{
        element.innerText = "Login";
    }
}

function Hide(element){
    element.remove();
}




function Like(element){
    const span = element.querySelector("span");
    let like1 =parseInt(span.innerText);
    like1++;
    span.innerText = like1 + " Like(s)";   
}

function Like2(element){
    const span = element.querySelector("span");
    let like2 =parseInt(span.innerText);
    like2++;
    span.innerText = like2 + " Like(s)";   
}

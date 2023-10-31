let result = document.getElementById("text-result");
let buttonReset = document.getElementById("change-text1");
let buttonAdd = document.getElementById("change-text2");
let buttonSub = document.getElementById("change-text3");

const BASE_TEXT = "値　：";
let resultValue = 0;
function changeResultText(){
    result.innerHTML = BASE_TEXT + resultValue;
}

function calculateResultValue(setValue){
    resultValue = resultValue + setValue;
}

buttonReset.addEventListener('click',()=>{
    resultValue = 0;
    changeResultText();
});

buttonAdd.addEventListener('click',()=>{
    calculateResultValue(1);
    changeResultText();
});

buttonSub.addEventListener('click',()=>{
    calculateResultValue(-1);
    changeResultText();
});


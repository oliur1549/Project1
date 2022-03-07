

const luckyNumberElm=document.querySelector(".luckyNumber")
const playerOneElm=document.querySelector(".p1")
const playerTwoElm=document.querySelector(".p2")
const inputTextElm=document.getElementById("input-text")
const submitBtnElm=document.querySelector(".submitBtn")
const resetBtnElm=document.querySelector(".resetBtn")




submitBtnElm.addEventListener('submit', function(evt){

    let luckyValue=inputTextElm.value

    luckyNumberElm.textContent=luckyValue

})


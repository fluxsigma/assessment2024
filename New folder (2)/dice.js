let dice = document.querySelector(".square")

dice.addEventListener("click",()=>{
    dice.textContent= Math.floor(Math.random()*6+1)
})

console.log(dice);
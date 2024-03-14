let Uname = document.querySelectorAll(".name")
let spanText = document.querySelectorAll("span")

for( let i =0;i<Uname.length;i++ ){
    Uname[i].addEventListener("input",()=>{
        if(Uname[i].value.length>3){
            spanText[i].textContent="name should be in 3 characters"
            spanText[i].style.backgroundColor="white"
            }
    })
}


let number = document.getElementById("phone")

number.addEventListener("input",()=>{
    if(number.value.length>10){
        spanText[3].textContent="must be in 10 digits"
        spanText[3].style.backgroundColor="white"
}

})


let password = document.querySelectorAll(".pass")

password = Array.from(password)


let stringpass;


password[1].addEventListener("input",()=>{

    let string1 = password[0].value
    let string2 =password[1].value

    if(string1!==string2){
        document.getElementById("p").innerText="not same"
        document.getElementById("p").style.backgroundColor="white"
    }

    else{
        document.getElementById("p").innerText=""
        document.getElementById("p").style.display="none"

    }

})









   










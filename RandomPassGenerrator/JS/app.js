const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerset= "abcdefghijklmnopqrstuvwxyz"
const numberset = "0123456789"
const symbolset =  "~@#$&*_?/$!%"

// selectors 
const totalchar = document.getElementById("total-char")
let upperinput = document.getElementById("upper-case")
let lowerinput   = document.getElementById("lower-case")
let numberinput = document.getElementById("number")
let symbolinput = document.getElementById("symbols")
const passbox =  document.getElementById("pass-box")







const getrandomData = (dataset)=>{
    return dataset[Math.floor(Math.random()* dataset.length)]
}
const generatepassword = (password="")=>{
    if(upperinput.checked){
        password += getrandomData(upperset)
    }
    if (lowerinput.checked){
        password += getrandomData(lowerset)
    }
    if (numberinput.checked){
        password += getrandomData(numberset)
    }
    if (symbolinput.checked){
        password += getrandomData(symbolset)
    }
    if(password.length < totalchar.value){
        return generatepassword(password)
    }
    passbox.innerText = truncateString(password,totalchar.value)
    

}   
generatepassword()
document.getElementById("btn").addEventListener(
    "click", function(){
        generatepassword()
    }
)

function truncateString (str,num){
    if (str.length > num){
        let substr = str.substring(0,num);
        return substr
    }else{
        return str;
    }
}
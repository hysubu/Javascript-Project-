
//  Here we store of All Password Character number 

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






// here we generate random character number symbol etc 
const getrandomData = (dataset)=>{
    return dataset[Math.floor(Math.random()* dataset.length)]
}




// here we generate password using selectors

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



//  here we add event on button 
document.getElementById("btn").addEventListener(
    "click", function(){
        generatepassword()
    }
)



// here we truncate the password if the password greater than input password we can trim here or delete the password 
function truncateString (str,num){
    if (str.length > num){
        let substr = str.substring(0,num);
        return substr
    }else{
        return str;
    }
}






// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
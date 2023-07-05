const getcolor = ()=>{
    // Hex Code (Hexa decimal code format is color code 
    const randomnumber = Math.floor(Math.random() * 1677215)  //  
    const randomcode = "#"+ randomnumber.toString(16);
    console.log(randomnumber, randomcode)
    document.getElementById("color-code").innerText = randomcode
    document.body.style.backgroundColor = randomcode
    // copy the color code  -> when we press the ctrl+v that time the color code is paste there  
    
    navigator.clipboard.writeText(randomcode)

}  
// Event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
    )

// initial call when page open 
getcolor()
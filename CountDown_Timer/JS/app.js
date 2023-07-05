const endDate = "06 july 2023 11:00 PM"
document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")
const clock = ()=>{
    const end = new Date(endDate)
    const now  = new Date()
    console.log(end)
    console.log(now)



    const diff = (end - now)/1000
    if (diff<0) return    // this condition returno when the diff time is success or complette or timer is complete
    // Convert  into day 
    inputs[0].value = Math.floor(diff/3600/24)
    // Convert into hours
    inputs[1].value = Math.floor((diff/3600) % 24)
    // Convert into minuts 
    inputs[2].value = Math.floor((diff/60) % 60)
    //convert into secnd
    inputs[3].value = Math.floor(diff%60)
}

// call the function in 1 sec 
setInterval(()=>{
    clock()
},1000)
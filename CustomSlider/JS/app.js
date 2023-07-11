const slide = document.querySelectorAll(".slide")
console.log(slide.length)   

slide.forEach((slide, index)=>{
    console.log(index)
    slide.style.left = `${index * 100}%`   // if we wnat to slide bottm to to or top to bottom then we write top replacing left 
})
let counter = null 
const gonext = ()=>{
    if (counter <= slide.length-1 & counter >= 0) {
        counter ++
        slideimage()
    }
    else{
        counter = 0 
        slideimage()
    }
}
const goprev = ()=>{
    if (counter >= 0 ){
        counter --
        slideimage()
    }
    else{
        slideimage()
    }
    
}
const slideimage = ()=>{
    slide.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`   // and here we also write Y if we want to slide top to botttom 

    })
}


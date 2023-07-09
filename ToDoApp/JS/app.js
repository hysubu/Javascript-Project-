const item = document.querySelector("#item")
const todoBox = document.querySelector("#to-do-box")

item.addEventListener("keyup",
function(event){
    if(event.key == "Enter"){
        addToDo(this.value)
    }
}   
)


const addToDo = (item)=>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}  
        <i><button > Delete</button></i>
            `
    ;
    listItem.addEventListener("click", 
    function(){
        this.classList.toggle("done")  // this mean - the listitem toggle mean this call adding or remove
        //  (when we click the button that adding or removing )
    })



    listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove()
    })
    todoBox.appendChild(listItem)



   
}
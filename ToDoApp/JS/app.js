const item = document.querySelector("#item")
const todoBox = document.querySelector("#to-do-box")
// this function worked when i add  data in input  and  tab the enter
item.addEventListener("keyup",
function(event){
    // when we tab the enter button and send to addTodo function as a parameter 
    if(event.key == "Enter"){
        addToDo(this.value)
    }
}   
)

//  here we add list 
const addToDo = (item)=>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}  
        <i><button> Delete</button></i>`;
    listItem.addEventListener("click", 
    function(){
        this.classList.toggle("done") 
         // this mean - the listitem toggle mean this call adding or remove
        //  (when we click the button that adding or removing )
    })


// When ever we click the delete button it was delete the list 
    listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove()
    })
    todoBox.appendChild(listItem)

}
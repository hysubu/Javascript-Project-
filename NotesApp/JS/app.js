


const addBtn = document.querySelector("#add-btn")
const main = document.querySelector("#main")
const data = []
const saveNote=() =>{
    const notes = document.querySelectorAll(".note textarea");
    console.log("asas",notes)
    console.log("data", data)
    notes.foreach(
        (note)=>{
            data.push(note.value)
        }
    )  
}
addBtn.addEventListener(
    "click",
    function () {
        addNote()
    }
)



const addNote = () => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
        <div class="tool">
            <i class="save fa-regular fa-floppy-disk"></i>
            <i class="trash fa-solid fa-trash"></i>
        </div>
        <textarea></textarea>
        `;
    note.querySelector(".trash").addEventListener(
        "click",
        function(){
            note.remove()
        }
    )
    note.querySelector(".save").addEventListener(
        "click", 
        function(){
            saveNote()
        }
    )
    main.appendChild(note);
}


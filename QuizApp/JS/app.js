
// This is a All Question And answer store in one array 
const question = [
    {
        "que":"which of the following is a makup language", 
        "a":"HTML", 
        "b":"CSS",
        "c":"JS",
        "d":"PYTHON",
        "correct":"a"

    },
    {
        "que":"Which is Backend language ", 
        "a":"HTML", 
        "b":"CSS",
        "c":"JS",
        "d":"PYTHON",
        "correct":"d"

    },
    {
        "que":"What is python Framework ", 
        "a":"Django",
        "b":"react",
        "c":"Angular",
        "d":"HTML",
        "correct":"a"

    },
    {
        "que":"Python Is A interpretd Language  ", 
        "a":"False",
        "b":"True",
        "c":"both a and b ",
        "d":"All the above",
        "correct":"b"

    }
]

let index = 0  // index 
let answer ;   //  this a empty answer value 
let total =question.length    // its length of question 

let correct = 0 ;   // here sstore the correct answer of question 
let  incorrect = 0 // here store the oncorrcet answer of questions 
const  quebox = document.getElementById("quebox")        // 
const optioninput = document.querySelectorAll(".inputs") // here selecet the all input class in one array 



// Here question are loaded 
const LoadQuestion =()=>{
    // here the condition we made if the total question is over it was showing endquiz function 
    if(index === total){
        return endQuiz()
    }
    const data = question[index]
    quebox.innerText = `${index+1}) ${data.que}`
    console.log(data.a)
    // Here we store the option one by one in input attribute or lebel 
    optioninput[0].nextElementSibling.innerText = data["a"]
    optioninput[1].nextElementSibling.innerText = data["b"]
    optioninput[2].nextElementSibling.innerText = data["c"]
    optioninput[3].nextElementSibling.innerText = data["d"]
    // next Elimenysibiling mean wwhich attribute is  below of option input and store this value of below attribute 
    //  here inputs below lebel attribute available  
}

LoadQuestion()


// Here the user submit the quiz  functionn 
const submitQuiz = ()=>{
    const data = question[index]
    const ans = getanswer()
    if (ans == data.correct){
        correct ++
        console.log(correct)
    }else{
        incorrect ++
    }

    index ++
    LoadQuestion()
    reset()
    return;
}



// Here get the answer  one by one of all questions   
const getanswer = ()=>{
    optioninput.forEach(
        (input)=>{
            if (input.checked){
                answer = input.value
            }
        }
    )
    return answer
}

//  Here reset the question when click the submit and going to next question and reset 
// the all option and checked false 

const reset = ()=>{
    optioninput.forEach(
        (input)=>{
            input.checked=false
        }
    )
}
LoadQuestion()

// Here after ending the quiz showing the page and how much is currect 
const endQuiz = () =>{
    // Here we change the box id attribute view >>>>>>
    document.getElementById("box").innerHTML = `
    <div style ="text-align : center">
    <h3> Thank you For Playing the Quiz 
    </h3>
    <h2> ${correct}/ ${total} are correct </h2>
    </div>
    `
}
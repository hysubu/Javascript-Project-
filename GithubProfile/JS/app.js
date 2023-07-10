

const APIURL = "https://api.github.com/users/"  // Github user Api url 
const main = document.querySelector("#main");   // 

// call create the  Api  
const getuser = async(username) => {
    const respone = await fetch(APIURL + username)
    console.log(respone)
    const data = await respone.json()
    console.log(data)
    const card = `
    <div class="card">
    <div class="image">
        <img src="${data.avatar_url}"  width=100px" height="100px"  style="border-radius: 100px;" alt="profile image ">
    </div>
    <div class="user-info">
        <h2>${data.name}</h2>
        <p> <strong>Bio</strong>: ${data.bio}</p>
        <ul class="info">
            <li>${data.followers} <strong>Followers</strong></li>
            <li>${data.following} <strong>Following </strong></li>
            <li>${data.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos">  
        </div>
    </div>
</div>
    `
    main.innerHTML = card
    getrepo(username)
}

// here get the User Repository 
const getrepo  = async(username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    const data = await response.json()
    console.log(data) 
    data.forEach((element) => {
        console.log(element)
        const elem = document.createElement("a")
        elem.classList.add("repo")
        elem.href = element.html_url
        elem.innerText = element.name
        repos.appendChild(elem)
    });
}

//  here call the api and when the user submit the button pass as a getuser parameter 
const formSubmit = () =>{
    let inputValue=document.getElementById('search');
    if (inputValue.value != ""){
        getuser(inputValue.value)
    }
    return false 
}

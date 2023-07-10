const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f6d7ccbd180375df2cfdba2afee05771&page=1"
const IMGPATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=f6d7ccbd180375df2cfdba2afee05771&query="
// Most Popular Movie

// inittial Call  when wreload a page tht time call
const movibox = document.querySelector("#section")
const getmovie = async(url) => {
    const response = await fetch(url)
    const data  = await response.json()
    showmovie(data.results) 
}

// Show Movie >>>>>>>>>>>>>>>>>>>>>>>>------------
const showmovie = (data)=>{
    movibox.innerHTML = ""
    console.log(data)
    data.forEach((element) => {
        console.log(element)
        let movieDiv=document.createElement("div");
        // create div element for each movies ----------------------------
        movieDiv.classList.add("cards") 
        movieDiv.innerHTML = `
        <div class="card">
        <img id="image" src=${IMGPATH + element.backdrop_path} width="280"  height="180px" >
        <h3>Title: ${element.original_title}</h3>
       <strong >Overview : </strong>  <span id="overview">${element.overview}</span>
        </div>
        `
        movibox.append(movieDiv)
    });
}
//  get the data from search box ......................
document.querySelector("#search").addEventListener(
    "keyup" ,
    function(event){
        if(event.target.value !== ""){
            console.log("ss", event.target.value)
            getmovie(SEARCHAPI + event.target.value)
    }else{
        getmovie(APIURL)
    }
}
)
getmovie(APIURL)

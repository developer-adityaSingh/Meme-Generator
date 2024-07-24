const buttton= document.querySelector("button")
const title= document.querySelector(".title")
const img= document.querySelector(".meme-img")
buttton.addEventListener("click",()=>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((e)=> {
        return e.json()
    }).then((data)=>{
        title.innerHTML= `<h1>${data.title}</h1>`;
        img.src= `${data.url}`;
        console.log(data)
    })
})
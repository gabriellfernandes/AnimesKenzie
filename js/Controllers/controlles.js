import { Api } from "../Modules/api.js";

export function button(){
     const ul = document.getElementsByClassName("Tip-ul")
     document.body.addEventListener("click", (e) => {
          const id = e.target.id.replace(/\D/g, '')
          if(e.target.className == "lado"){
               Array.from(ul).forEach((e, i) => {
                    if(id == ul[i].id)
                    {
                         const scroll = document.getElementById(id)
                         scroll.style.transition = "0.8s";
                         return scroll.scrollLeft -= 250
                    }
               })
          }
         
          if(e.target.className == "lado1"){
               Array.from(ul).forEach((e, i) => {
                    if(id == ul[i].id)
                    {
                         const scroll = document.getElementById(id)
                         scroll.style.transition = "0.8s";
                         return scroll.scrollLeft += 250
                    }
               })
          }
     })
 }
 
export function animeDetailsHtml(){
     document.body.addEventListener("click", (e) => {
          
          const a = document.getElementsByClassName("Anime-link")
          for(let i = 0; i < a.length; i++){
               if(e.target.parentNode.id == a[i].id){
                    e.preventDefault()
                    console.log(a[i])
                    let anime = a[i].childNodes[1].innerText
                    const time = []
                    anime = anime.split(" ")
                    anime.forEach((elem) => {
                         time.push(elem.replace(/[^-\w\s]/gi, "").toLowerCase())
                    })

                    localStorage.setItem("anime", time.join("-"))
                    window.location.href += "/AnimesKenzie/Pages/AnimeDetails.html"
               }
          }
         
     })
}

export function animeDetailsHtmlFilme(){
     document.body.addEventListener("click", (e) => {
          
          const a = document.getElementsByClassName("Anime-link12")
          for(let i = 0; i < a.length; i++){
               if(e.target.parentNode.id == a[i].id){
                    e.preventDefault()
                    console.log(a[i])
                    let anime = a[i].childNodes[1].innerText
                    const time = []
                    anime = anime.split(" ")
                    anime.forEach((elem) => {
                         time.push(elem.replace(/[^-\w\s]/gi, "").toLowerCase())
                    })

                    localStorage.setItem("anime", time.join("-")+"-dub")
                    window.location.href += "/AnimesKenzie/Pages/AnimeDetails.html"
               }
          }
         
     })
}


export function animeEpisodio(){
     document.body.addEventListener("click", (e) => {
          const a = document.getElementsByClassName("episodio-Link")
          for(let i = 0; i < a.length; i++){
               if(e.target.parentNode.id == a[i].id){
                    e.preventDefault()
                    let anime = a[i].childNodes[3].innerText
                    const time = []
                    anime = anime.split(" ")
                    anime.forEach((elem) => {
                         time.push(elem.replace(/[^-\w\s]/gi, "").toLowerCase())
                    })
                    localStorage.setItem("episodio", time.join("-"))
                    console.log(time.join("-"))
                    Api.getEpisodiosWatch(time.join("-"))
                    console.log(time.join("-"))
                    return window.location.href += "/AnimesKenzie/Pages/episodio.html"
                    
               }
          }
         
     })
}


export function animeRecente(){
     document.body.addEventListener("click", (e) => {
          const a = document.getElementsByClassName("Anime-linkRecent")
          for(let i = 0; i < a.length; i++){
               if(e.target.parentNode.id == a[i].id){
                    e.preventDefault()
                    console.log(a[i])
                    let anime = a[i].childNodes[1].innerText
                    let ep = a[i].childNodes[2].innerText
                    ep = ep.replace(/[^0-9]/g,'')
                    const time = []
                    anime = anime.split(" ")
                    anime.forEach((elem) => {
                         time.push(elem.replace(/[^-\w\s]/gi, "").toLowerCase())
                    })
                    localStorage.setItem("anime", time.join("-"))
                    localStorage.setItem("episodio", time.join("-") + "-episode-" + ep)
                    return window.location.href = "/AnimesKenzie/Pages/episodio.html"
               }
          }
         
     })
}

animeRecente()
animeDetailsHtmlFilme()
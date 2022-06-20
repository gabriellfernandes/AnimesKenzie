import { Api } from "./api.js";

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
                         let oi = elem.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
                         time.push(oi.replace(":", "").replace("(", "").replace(")", "").replace(",", "").toLowerCase())
                    })

                    localStorage.setItem("anime", time.join("-"))
                    window.location.href = "./AnimeDetails.html"
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
                         let oi = elem.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
                         time.push(oi.replace(":", "").replace("(", "").replace(")", "").replace(",", "").toLowerCase())
                    })

                    return Api.getEpisodiosWatch(time.join("-"))
               }
          }
         
     })
}
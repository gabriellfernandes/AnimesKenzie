
let cont = 0;

export class Api {
    static BASE = "https://api.jikan.moe"

    static async getAnimes(){
        const response = await fetch(`${this.BASE}/v4/anime`,{
            method: "GET",
            headers: {},
            
            "pagination": {
                "last_visible_page": cont,
                "has_next_page": true
                }
        });
        
        const date = await response.json();
        return Card.animesCard(date.data);
    }

    static async getAnimeNews(id){
        const response = await fetch(`${this.BASE}/v4/anime/${id}/news`,{
            method: "GET",
            headers: {}
        });
        
        const date = await response.json();
        console.log(date.data)
        return Card.animesCard(date.data)
    }

    static async getAnimeEpisodes(id){
        const response = await fetch(`${this.BASE}/v4/anime/${id}/episodes`,{
            method: "GET",
            headers: {}
        });
        
        const date = await response.json();
        console.log(date.data)
        return 
    }
}

class Card{
    static animesLacamentos = document.getElementsByClassName("lancamento")
    
    static async  animesCard(anime){

        if(anime.constructor.name == "AnimesComEps"){
            return this.animesComEpCard(anime)
        }else{
            this.animesLacamentos[0].innerHTML = ""
            const ul = document.createElement("ul");
            ul.id = "ul"
            anime.map((elem) => {
                const li = document.createElement("li");
    
                const a = document.createElement("a");
                a.href = elem.url;
                a.target = "_blank";
                li.appendChild(a);
    
                const figure = document.createElement("figure");
                a.appendChild(figure);
    
                const img = document.createElement("img");
                img.src = elem.images.jpg.image_url
                img.alt = elem.name;
                figure.appendChild(img);
                    
                const figureCaption = document.createElement("figcaption");
                figureCaption.innerText = elem.name;
                figure.appendChild(figureCaption);
    
                const p = document.createElement("p");
                p.innerText = elem.title;
                a.appendChild(p);
    
                ul.appendChild(li);
            });
    
            this.animesLacamentos[0].appendChild(ul);
        }
    }

    static animesComEpCard(anime){
        const ul = document.createElement("ul");
        ul.className = "ul"
        anime = anime.anime
        anime.map((elem) => {
            const li = document.createElement("li")

    
            const figure = document.createElement("figure")
            li.appendChild(figure)
        
        
            const a = document.createElement("a")
            a.href = "#"
            li.appendChild(a)
    
        
            const img = document.createElement("img")
            img.src = elem.image
            img.alt = elem.name
            figure.appendChild(img)
            
        
        
            const figureCaption = document.createElement("figcaption")
            figureCaption.innerText = elem.name
            figure.appendChild(figureCaption)
    
        
            const p = document.createElement("p")
            p.innerText = elem.name
            p.className = "p2"
            a.appendChild(p)
    
            const p2 = document.createElement("p")
            p2.innerText = elem.ep
            p2.className = "p2 " + "p3"
            a.appendChild(p2)
    
    
        
            ul.appendChild(li)
        });

        this.animesLacamentos[1].appendChild(ul);
    }
     
}



export class Api {
    static BASE = "https://gogoanime.herokuapp.com"

    static async getAnimes(){
        const response = await fetch(`${this.BASE}/recent-release`,{});
        
        const date = await response.json();
        this.getAnimeFilme();
        this.getTopAnimes();
        this.getUltimosAnimes();
        return Card.animesComEpCard(date);
    }

    static async getAnimeFilme(){
        const response = await fetch(`${this.BASE}/anime-movies`,{});
        
        const date = await response.json();
        return Card.animesFilmeCard(date);
    }

    static async getTopAnimes(){
        const response = await fetch(`${this.BASE}/popular`,{});
        
        const date = await response.json();
        return Card.topAnimesCard(date);
    }

    static async getUltimosAnimes(){
        const response = await fetch(`${this.BASE}/top-airing`,{});
        
        const date = await response.json();
        return Card.ultimosAnimesCard(date);
    }

}

class Card{
    static animesLacamentos = document.getElementsByClassName("lancamento")
    
    static async animesFilmeCard(anime){
            this.animesLacamentos[1].innerHTML = ""
            
            const ul = document.createElement("ul");
            ul.className = "Tip-ul"

            anime.map((elem) => {
                const li = document.createElement("li");
    
                const a = document.createElement("a");
                a.href = elem.episodeUrl;
                a.target = "_blank";
                li.appendChild(a);
    
                const figure = document.createElement("figure");
                a.appendChild(figure);
    
                const img = document.createElement("img");
                img.src = elem.animeImg
                img.alt = elem.animeTitle;
                figure.appendChild(img);
                    
                const figureCaption = document.createElement("figcaption");
                figureCaption.innerText = elem.animeTitle;
                figure.appendChild(figureCaption);
    
                const p = document.createElement("p");
                p.innerText = elem.animeTitle;
                li.appendChild(p);
     
                ul.appendChild(li);
            });
    
            this.animesLacamentos[1].appendChild(ul);
    }

    static animesComEpCard(anime){
        this.animesLacamentos[0].innerHTML = ""
        
        const ul = document.createElement("ul");
        ul.className = "ul Tip-ul"
        this.animesLacamentos[1].appendChild(ul);
        
        anime.map((elem) => {
            const li = document.createElement("li")

            const figure = document.createElement("figure")
            figure.style.backgroundImage = `url(${elem.animeImg})`;
            figure.style.backgroundSize = "cover";
            li.appendChild(figure)
        
            const a = document.createElement("a")
            a.href = elem.episodeUrl;
            li.appendChild(a)
    

            const figureCaption = document.createElement("figcaption")
            figureCaption.innerText = elem.animeTitle;
            figure.appendChild(figureCaption)
    
        
            const p = document.createElement("p")
            p.innerText = elem.animeTitle;
            p.className = "p2"
            a.appendChild(p)
    
            const p2 = document.createElement("p")
            p2.innerText = `Episódio ${elem.episodeNum}`;
            p2.className = "p2 " + "p3"
            a.appendChild(p2)
    
    
            ul.appendChild(li)
        });

        this.animesLacamentos[0].appendChild(ul);
    }

    static topAnimesCard(anime){
        this.animesLacamentos[3].innerHTML = ""
            
        const ul = document.createElement("ul");
        ul.className = "Tip-ul"

        anime.map((elem) => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = elem.episodeUrl;
            a.target = "_blank";
            li.appendChild(a);

            const figure = document.createElement("figure");
            figure.style.backgroundImage = `url(${elem.animeImg})`;
            figure.style.backgroundSize = "cover";
            a.appendChild(figure);

            const figureCaption = document.createElement("figcaption");
            figureCaption.innerText = elem.animeTitle;
            figure.appendChild(figureCaption);

            const p = document.createElement("p");
            p.innerText = elem.animeTitle;
            li.appendChild(p);
 
            ul.appendChild(li);
        });

        this.animesLacamentos[3].appendChild(ul);
    }

    static ultimosAnimesCard(anime){
        this.animesLacamentos[2].innerHTML = ""
            
        const ul = document.createElement("ul");
        ul.className = "Tip-ul"

        anime.map((elem) => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = elem.episodeUrl;
            a.target = "_blank";
            li.appendChild(a);

            const figure = document.createElement("figure");
            figure.style.backgroundImage = `url(${elem.animeImg})`;
            figure.style.backgroundSize = "cover";
            a.appendChild(figure);

            const figureCaption = document.createElement("figcaption");
            figureCaption.innerText = elem.animeTitle;
            figure.appendChild(figureCaption);

            const p = document.createElement("p");
            p.innerText = elem.animeTitle;
            li.appendChild(p);
 
            ul.appendChild(li);
        });

        this.animesLacamentos[2].appendChild(ul);
    }
}



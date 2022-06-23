let cont = 1
let cont2 = 1
export class Api {
    static BASE = "https://gogoanime.herokuapp.com"

    static async getAnimes(){
        const response = await fetch(`${this.BASE}/recent-release`,{});
        
        const date = await response.json();
        
        
        return Card.animesComEpCard(date),this.getAnimeFilme(),this.getUltimosAnimes(),this.getTopAnimes();
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

    static async getTopAnimesItens(){
        const response = await fetch(`${this.BASE}/popular`,{});
        
        const date = await response.json();
        return date
    }

    static async getUltimosAnimes(){
        const response = await fetch(`${this.BASE}/top-airing`,{});
        
        const date = await response.json();
        return Card.ultimosAnimesCard(date);
    }

    static async getDetails(id){
        const response = await fetch(`${this.BASE}/anime-details/${id}`,{});
        
        const date = await response.json();
        Card.animeDetailtCard(date)
        return date;
    }

    static async getDetailsUn(id){
        const response = await fetch(`${this.BASE}/anime-details/${id}`,{});
        
        const date = await response.json();

        return date;
    }

    static async getEpisodiosWatch(id){
        const response = await fetch(`${this.BASE}/fembed/watch/${id}`,{});
        
        const date = await response.json();
    
        return Card.animeEpsodioCard(date.headers);
    }
    
    static async getEpisodiosWatchServD(id){
        const response = await fetch(`${this.BASE}/vidcdn/watch/${id}`,{});
        
        const date = await response.json();

        const video = document.getElementById("video")
        return video.src = date.headers.Referer
    }

    static async getEpisodiosWatchServT(id){
        const response = await fetch(`${this.BASE}/streamsb/watch/${id}`,{});
        
        const date = await response.json();
        
        const video = document.getElementById("video")
        return video.src = date.headers.Referer
    }
}

class Card{
    static animesLacamentos = document.getElementsByClassName("lancamento")
    
    static animesComEpCard(anime){
        this.animesLacamentos[0].innerHTML = ""
        
        const ul = document.createElement("ul");
        ul.className = "ul Tip-ul"
        this.animesLacamentos[1].appendChild(ul);
        ul.id = 0
        

        anime.map((elem) => {
            const li = document.createElement("li")

            const a = document.createElement("a")
            a.href = "#" 
            a.href = "#";
            a.id = `A${cont}`
            a.className = "Anime-link"
            cont++;
            
            li.appendChild(a)

            const figure = document.createElement("figure")
            figure.style.backgroundImage = `url(${elem.animeImg})`;
            figure.style.backgroundSize = "cover";
            a.appendChild(figure)
        
            

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

    static async animesFilmeCard(anime){
        this.animesLacamentos[1].innerHTML = ""
        
        const ul = document.createElement("ul");
        ul.className = "Tip-ul"
        ul.id = 1
      

        anime.map((elem) => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = "#";
           
            li.appendChild(a);

            const figure = document.createElement("figure");
            figure.style.backgroundImage = `url(${elem.animeImg})`;
            figure.style.backgroundSize = "cover";
            a.appendChild(figure);

            const img = document.createElement("img");
            img.src = elem.animeImg
            img.alt = elem.animeTitle;
            img.style.display = "none";
            figure.appendChild(img);
                
            const figureCaption = document.createElement("figcaption");
            figureCaption.innerText = elem.animeTitle;
            figure.appendChild(figureCaption);

            const p = document.createElement("p");
            p.innerText = elem.animeTitle;
            a.appendChild(p);
 
            ul.appendChild(li);
        });

        this.animesLacamentos[1].appendChild(ul);
    }

    static ultimosAnimesCard(anime){
        this.animesLacamentos[2].innerHTML = ""
            
        const ul = document.createElement("ul");
        ul.className = "Tip-ul"
        ul.id = 2
       

        anime.map((elem) => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = "#e";
            a.id = `A${cont}`
            cont++;
            a.className = "Anime-link"

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
            a.appendChild(p);
 
            ul.appendChild(li);
        });

        this.animesLacamentos[2].appendChild(ul);
    }

    static topAnimesCard(anime){
        this.animesLacamentos[3].innerHTML = ""
            
        const ul = document.createElement("ul");
        ul.className = "Tip-ul"
        ul.id = 3
        

        anime.map((elem) => {
            const li = document.createElement("li");

            const a = document.createElement("a");
            a.href = "#";
            a.id = `A${cont}`
            cont++;
            a.className = "Anime-link"
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
            a.appendChild(p);
 
            ul.appendChild(li);
        });

        this.animesLacamentos[3].appendChild(ul);
    }

    static animeDetailtCard(anime){
        const conteinerMain2 = document.getElementsByClassName("conteiner-Main2")[0];
        const divTitle = document.createElement("div");
        divTitle.className = "conteiner-title"
        conteinerMain2.appendChild(divTitle);

        const img = document.createElement("img");
        img.src = anime.animeImg;
        img.alt = anime.animeTitle;
        img.className = "img"
        divTitle.appendChild(img);

        const ul = document.createElement("ul");
        divTitle.appendChild(ul);

        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = anime.animeTitle;
        p.className = "title"
        li.appendChild(p);
        ul.appendChild(li);

        const li2 = document.createElement("li");
        const p2 = document.createElement("p");
        p2.innerText = `Titulo Original: ${anime.otherNames}`;
        p2.className = "subTitle"
        li2.appendChild(p2);
        ul.appendChild(li2);

        const div = document.createElement("div");
        ul.appendChild(div);
        
        const divgenero = document.createElement("div");
        divgenero.className = "div-genero"
        div.appendChild(divgenero);
        
        const genero = document.createElement("h2");
        genero.innerText = "Gênero";
        divgenero.appendChild(genero);

        const ulGenero = document.createElement("ul");
        divgenero.appendChild(ulGenero);
        
        anime.genres.map((elem) => {
            const liGenero = document.createElement("li");
            liGenero.innerText = elem;
            ulGenero.appendChild(liGenero);
        });

        const ulDescription = document.createElement("ul");
        ulDescription.className = "ul"
        div.appendChild(ulDescription);

        const liDescription = document.createElement("li");
        const pDescription = document.createElement("p");
        pDescription.innerText = `Ano: `;
        liDescription.appendChild(pDescription);
        ulDescription.appendChild(liDescription);
        
        const span = document.createElement("span");
        span.innerText = anime.releasedDate;
        pDescription.appendChild(span);

        const liDescription2 = document.createElement("li");
        const pDescription2 = document.createElement("p");
        pDescription2.innerText = `Episódios: `;
        liDescription2.appendChild(pDescription2);
        ulDescription.appendChild(liDescription2);

        const span2 = document.createElement("span");
        span2.innerText = anime.totalEpisodes;
        pDescription2.appendChild(span2);

        const liDescription3 = document.createElement("li");
        const pDescription3 = document.createElement("p");
        pDescription3.innerText = `Status: `;
        liDescription3.appendChild(pDescription3);
        ulDescription.appendChild(liDescription3);

        const span3 = document.createElement("span");
        span3.innerText = anime.status == "Ongoing"? "Em andamento": "Finalizado";
        pDescription3.appendChild(span3);

        const divContainersinopse = document.createElement("div");
        divContainersinopse.className = "conteiner-sinopse";
        conteinerMain2.appendChild(divContainersinopse);

        const sinopse = document.createElement("h2");
        sinopse.innerText = "Sinopse";
        divContainersinopse.appendChild(sinopse);

        const pSinopse = document.createElement("p");
        pSinopse.innerText = anime.synopsis;
        divContainersinopse.appendChild(pSinopse);

        const divContainerEpisodio = document.createElement("div");
        divContainerEpisodio.className = "conteiner-episodio";
        conteinerMain2.appendChild(divContainerEpisodio);

        const episodio = document.createElement("P");
        episodio.innerText = "Indisponivel Ainda";
        divContainerEpisodio.appendChild(episodio);

        const divContainerTemporada = document.createElement("div");
        divContainerTemporada.className = "conteiner-temporada";
        conteinerMain2.appendChild(divContainerTemporada);

        const temporada = document.createElement("h2");
        temporada.innerText = "Episódios";
        divContainerTemporada.appendChild(temporada);

        const ulTemporada = document.createElement("ul");
        divContainerTemporada.appendChild(ulTemporada);

        anime.episodesList.map((elem) => {
            const liTemporada = document.createElement("li");
            liTemporada.className = "episodio-Link"
            liTemporada.id = `a${cont2}`;
            cont2++;

            const img = document.createElement("img");
            img.src = anime.animeImg;
            img.alt = "Episódio";
            liTemporada.appendChild(img);

            const p = document.createElement("p");
            p.innerText = `1 - ${elem.episodeNum}`;
            liTemporada.appendChild(p);

            const span = document.createElement("span");
            span.innerText = "|";
            liTemporada.appendChild(span);

            const p2 = document.createElement("p");
            p2.innerText = elem.episodeId.replace(/-/g, " ");
            p2.className = "p-episodio"
            liTemporada.appendChild(p2);
            ulTemporada.appendChild(liTemporada);
        });

        const divConteinerTop = document.getElementsByClassName("conteiner-Top")[0];
        const h2Top = document.createElement("h2");
        h2Top.innerText = "Top Animes";
        divConteinerTop.appendChild(h2Top);

        const ulTop = document.createElement("ul");
        divConteinerTop.appendChild(ulTop);

        Api.getTopAnimesItens().then((animes) => {
            for(let i = 0; i < 10; i++){
                const liTop = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.id = `A${cont}`
                a.className = "Anime-link"
                cont++;
                
                const figure = document.createElement("figure");
                figure.style.backgroundImage = `url(${animes[i].animeImg})`;
                figure.style.backgroundSize = "cover";
                figure.style.backgroundPosition = "center";
                

                a.appendChild(figure);

                const figureCaption = document.createElement("figcaption");
                figureCaption.innerText = animes[i].animeTitle;
                figure.appendChild(figureCaption);

                const p = document.createElement("p");
                p.innerText = animes[i].animeTitle;
                a.appendChild(p);
                liTop.appendChild(a);
                ulTop.appendChild(liTop);
            }
        })
    }

    static animeEpsodioCard(anim){
        const conteinerMain2 = document.getElementsByClassName("conteiner-Main2")[0];
        const divTitle = document.createElement("div");
        divTitle.className = "conteiner-title"
        conteinerMain2.appendChild(divTitle);
        
        const iframe = document.createElement("iframe");
        iframe.allowFullscreen = true;
        iframe.src = anim.Referer;
        iframe.width = "1024";
        iframe.height = "720";
        iframe.frameborder="0" 
        iframe.allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        iframe.id = "video"
        divTitle.appendChild(iframe);

        Api.getDetailsUn(localStorage.getItem("anime")).then((anime) => {
            const ultitle = document.createElement("ul");
            divTitle.appendChild(ultitle);
            
            const liImgTitle = document.createElement("li");
            ultitle.appendChild(liImgTitle);
            
            const liTitle = document.createElement("li");
            ultitle.appendChild(liTitle);

            
            const title = document.createElement("h1");
            title.innerText = `Title: ${anime.animeTitle}`;
            title.className = "title";
            liTitle.appendChild(title);
            
            const subTitle = document.createElement("h3");
            subTitle.innerText = `SubTitle: ${anime.otherNames}`;
            subTitle.className = "subTitle";
            liTitle.appendChild(subTitle);

            const img = document.createElement("img");
            img.src = anime.animeImg;
            img.alt = "Anime";
            liImgTitle.appendChild(img);
            img.className = "img";

          

    
            const divContainerTemporada = document.createElement("div");
            divContainerTemporada.className = "conteiner-temporada";
            conteinerMain2.appendChild(divContainerTemporada);

            const temporada = document.createElement("h2");
            temporada.innerText = "Episódios";
            divContainerTemporada.appendChild(temporada);

            const ulTemporada = document.createElement("ul");
            divContainerTemporada.appendChild(ulTemporada);
            
            
            
            
            anime.episodesList.map((elem) => {
                const liTemporada = document.createElement("li");
                liTemporada.className = "episodio-Link"
                liTemporada.id = `a${cont2}`;
                cont2++;

                const img = document.createElement("img");
                img.src = anime.animeImg;
                img.alt = "Episódio";
                img.style.width = "140px";
                img.style.height = "180px";
                liTemporada.appendChild(img);

                const p = document.createElement("p");
                p.innerText = `1 - ${elem.episodeNum}`;
                liTemporada.appendChild(p);

                const span = document.createElement("span");
                span.innerText = "|";
                liTemporada.appendChild(span);

                const p2 = document.createElement("p");
                p2.innerText = elem.episodeId.replace(/-/g, " ");
                p2.className = "p-episodio"
                liTemporada.appendChild(p2);
                ulTemporada.appendChild(liTemporada);
            });
        });

        const divConteinerTop = document.getElementsByClassName("conteiner-Top")[0];
        const h2Top = document.createElement("h2");
        h2Top.innerText = "Top Animes";
        divConteinerTop.appendChild(h2Top);

        const ulTop = document.createElement("ul");
        divConteinerTop.appendChild(ulTop);

        Api.getTopAnimesItens().then((animes) => {
            for(let i = 0; i < 10; i++){
                const liTop = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.id = `A${cont}`
                a.className = "Anime-link"
                cont++;
                
                const figure = document.createElement("figure");
                figure.style.backgroundImage = `url(${animes[i].animeImg})`;
                figure.style.backgroundSize = "cover";
                figure.style.backgroundPosition = "center";
                

                a.appendChild(figure);

                const figureCaption = document.createElement("figcaption");
                figureCaption.innerText = animes[i].animeTitle;
                figure.appendChild(figureCaption);

                const p = document.createElement("p");
                p.innerText = animes[i].animeTitle;
                a.appendChild(p);
                liTop.appendChild(a);
                ulTop.appendChild(liTop);
            }
        })
    }
}



//o que tenho que fazer 
    /* Criar um objeto com todos os animes dentro */

    /* Criar um ul dentro da ul vai ter uma li com uam tag a
    dentro da tag a vai ter um figure com um img e um figurecaption hidden
    e aidna dentro da tag a vai ter um paragrafo com nome do anime */

    //Tentar criar um botao que vai alterar o inicio do indice i do for e o tamanho total do loop

///A parte que adiciona os animes lancamentos
    //Objeto do animes lançamentos
        const animesLancamentosObjeto = [
            {
                name: "Kawaii dake ja Nai Shikimori-san",
                image: "https://animesup.biz/wp-content/uploads/2022/04/1SpLKmsbPqmXchS2XkBhaJWaXMk-185x278.jpg"
            },
            {
                name: "Build Divide: Code Black",
                image: "https://animesup.biz/wp-content/uploads/2021/10/pbBCMwz4fsah7zON2qEkUvmgaZ3-185x278.jpg"
            },
            {
                name: "Sono Bisque Doll wa Koi wo Suru Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/01/keC8NAKutZP1o0BvGcy5AcTh7Ob-185x278.jpg"
            }, 
            {
                name: "Kingdom",
                image: "https://animesup.biz/wp-content/uploads/2022/04/iYvU4TinKro9Yw3Ym1wbDNXHS1O-185x278.jpg"
            },   
            {
                name: "Shikkakumon no Saikyou Kenja (The Strongest Sage With the Weakest Crest) Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/02/wH3QL6PBuCQINs6DLpuHczsxvRB-185x278.jpg"
            },
            {
                name: "SPY×FAMILY",
                image: "https://animesup.biz/wp-content/uploads/2022/04/wJOLiZIDvtmNbOaaHxQrRGzCAEu-185x278.jpg"
            },
            {
                name: "Onipan!",
                image: "https://animesup.biz/wp-content/uploads/2022/04/naF0C1Uavs2zfJNBkSyypcRyqLh-185x278.jpg"
            },
        ]

    //objeto do adicionados recentemente
        const adicionadosRecent = [
            {
                name: "Eizouken ni wa Te wo Dasu na! Dublado Episódio 6",
                image: "https://animesup.biz/wp-content/uploads/2022/04/sLyfhUUGiC8Gn47Ujv0CtCgeXYS-300x170.jpg",
                ep: "Episódio 6"
            },            
            {
                name: "Shokei Shoujo no Virgin Road",
                image: "https://animesup.biz/wp-content/uploads/2022/04/rz7XJMDEFVOjX7gU4AYHTS5Bjnp-300x170.jpg",
                ep: "Episódio 2"
            },            
            {
                name: "Baraou no Souretsu (Requiem of the Rose King)",
                image: "https://animesup.biz/wp-content/uploads/2022/04/6oDw8qgj8WjJix1PBU2HawM6csk-300x170.jpg",
                ep: "Episódio 13"
            },
            {
                name: "Baraou no Souretsu (Requiem of the Rose King) Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/04/cIPXEhgfpf032wiRaed1xbzpIA6-300x170.jpg",
                ep: "Episódio 11"
            },
            {
                name: "Genjitsu Shugi Yuusha no Oukoku Saikenki Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/04/tsHLXKOIzG38o0kkPLFInGQfIP4-300x170.jpg",
                ep: "Episódio 24"
            },
            {
                name: "Boruto: Naruto Next Generations",
                image: "https://animesup.biz/wp-content/uploads/2022/04/pic1-1-300x170.jpg",
                ep: "Episódio 244"
            },
            {
                name: "Kono Healer, Mendokusai",
                image: "https://animesup.biz/wp-content/uploads/2022/04/6RDXTFTq7G9vrBq1x3mnMptEmCR-300x170.jpg",
                ep: "Episódio 1"
            },
            {
                name: "Shikkakumon no Saikyou Kenja Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/04/7BQmldV5Od7L2C8w8FpdU4J95LQ-300x170.jpg",
                ep: "Episódio 8"
            },
            {
                name: "Pokemon (2019)",
                image: "https://animesup.biz/wp-content/uploads/2022/04/pic8-1-300x170.jpg",
                ep: "Episódio 110"
            },
            {
                name: "Sono Bisque Doll wa Koi wo Suru Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/04/8v71hvqKvd30J1qCk1MoJjZphGd-300x170.jpg",
                ep: "Episódio 11"
            },
            {
                name: "SPY×FAMILY",
                image: "https://animesup.biz/wp-content/uploads/2022/04/3EwkiSokUJRkAwB3b3bFG3J8IoA-300x170.jpg",
                ep: "Episódio 1"
            },
            {
                name: "Build Divide (Code White)",
                image: "https://animesup.biz/wp-content/uploads/2022/04/dEuFYnGfBR71qGmI1oYGYjgNA3s-300x170.jpg",
                ep: "Episódio 2"
            }
        ]

    ///Objeto do filmes adicionados
        const filmesAdicionados = [
            {
                name: "One Piece Filme 14: Stampede Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/04/pQLJiY9XfiO3IN1x0l0E51XSwgV-185x278.jpg"
            },
            {
                name: "One Piece Filme 13: Gold Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/04/cac5d1cbcjur2XLOgcJeYQoLbjl-185x278.jpg"
            },
            {
                name: "One Piece Filme 10: Strong World Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/03/73RUyP0r4nEO4NBJzaji0QETNmY-185x278.jpg"
            },
            {
                name: "Fate/Grand Order: Shuukyoku Tokuiten – Kani Jikan Shinden Solomon",
                image: "https://animesup.biz/wp-content/uploads/2022/02/4tiJlL2BPbreU0y1fVnN9fH3Nys-185x278.jpg"
            },
            {
                name: "Sword Art Online: Ordinal Scale Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/02/2szdEK0Mr0RG0nWGFVTseNQHbnP-185x278.jpg"
            },
            {
                name: "Violet Evergarden Filme Dublado",
                image: "https://animesup.biz/wp-content/uploads/2021/10/mpNG6z33xOtUWuOU83BE0bvorxi-185x278.jpg"
            },
        ]
    
    ///Obejeto do ÚLTIMOS ANIMES ADICIONADO
        const utAnimes = [
            {
                name: "Onipan!",
                image: "https://animesup.biz/wp-content/uploads/2022/04/naF0C1Uavs2zfJNBkSyypcRyqLh-185x278.jpg"
            },
            {
                name: "Mugyutto! Black Clover",
                image: "https://animesup.biz/wp-content/uploads/2022/04/wc421LF4gcEFDgKZFCyniYB0i8X-185x278.jpg"
            },
            {
                name: "Thermae Romae Novae",
                image: "https://animesup.biz/wp-content/uploads/2022/04/Vmd3Mnz1uMseHAbOSQNqFDbqj1-185x278.jpg"
            },
            {
                name: "Eizouken ni wa Te wo Dasu na! Dublado",
                image: "https://animesup.biz/wp-content/uploads/2022/04/6sZdzYquPK3DNdyKqTia9uappIM-185x278.jpg"
            },
            {
                name: "Kono Healer, Mendokusai",
                image: "https://animesup.biz/wp-content/uploads/2022/04/yvgSonbC67Ltc2TAHiF1TmdJ424-185x278.jpg"
            },
            {
                name: "Dororo (1969)",
                image: "https://animesup.biz/wp-content/uploads/2022/04/kFFRiNaQJub24cgiNmDfLjZj9oT-185x278.jpg"
            },
            {
                name: "Dororo (1969)",
                image: "https://animesup.biz/wp-content/uploads/2022/04/kFFRiNaQJub24cgiNmDfLjZj9oT-185x278.jpg"
            },
            {
                name: "Kono Healer, Mendokusai",
                image: "https://animesup.biz/wp-content/uploads/2022/04/yvgSonbC67Ltc2TAHiF1TmdJ424-185x278.jpg"
            },
        ]
    
    //parte de melhores ep da semana
        const melhoreEpObjeto = [
        {
            name: "Sono Bisque Doll wa Koi wo Suru (My Dress-Up Darling)",
            image: "https://animesup.biz/wp-content/uploads/2022/03/zcim2R5l4yZOmkkaZVh0uLfubq5-300x170.jpg",
            ep: "Episódio 12 (Final)"
        },
        {
            name: "Tate no Yuusha no Nariagari 2",
            image: "https://animesup.biz/wp-content/uploads/2022/04/tRO0DbjXkA6s7pU0hVJJfrDrPqr-300x170.jpg",
            ep: "Episódio 1"
        },
        {
            name: "Shingeki no Kyojin: The Final Season Part 2",
            image: "https://animesup.biz/wp-content/uploads/2022/04/5XTkKxbmQrweBVq6NMvl9bro8B0-300x170.jpg",
            ep: "Episódio 12"
        },
        {
            name: "Arifureta Shokugyou de Sekai Saikyou 2",
            image: "https://animesup.biz/wp-content/uploads/2022/03/zw7sQDlrnFnz9NRNYY9cUxDXW9f-300x170.jpg",
            ep: "Episódio 11"
        },
    ]

    //pegando o elemento que a ul estara dentro
        const navLacamentos = document.getElementsByClassName("lancamento")[0]
       

    //Criando a ul de lancamento
        const lancamentos = document.createElement("ul")

    //Criando a funtion que vai criar os itens da tela
        function animesLacamentos(x){
                //criando a li
                    const li = document.createElement("li")

                //criando a tag a
                    const a = document.createElement("a")
                    a.href = "#"
                    li.appendChild(a)

                //criando a figure
                    const figure = document.createElement("figure")
                    a.appendChild(figure)

                //criando a img
                    const img = document.createElement("img")
                    img.src = x.image
                    img.alt = x.name
                    figure.appendChild(img)
                    
                
                //criando a tag figurecaption
                    const figureCaption = document.createElement("figcaption")
                    figureCaption.innerText = x.name
                    figure.appendChild(figureCaption)

                //criando a tag p fora do figure dentro da tag a
                    const p = document.createElement("p")
                    p.innerText = x.name
                    a.appendChild(p)


                //adicionando a li dentro da ul
                lancamentos.appendChild(li)

            return navLacamentos.appendChild(lancamentos)
        }


    //criando um sistema de botao
        let inicio = 0
        let final = 6    
    
    //fazendo reconhecer o click do botao para o lado <
        document.getElementsByClassName("lado")[0].addEventListener("click", function(){
            if(inicio <= 0){
                inicio = animesLancamentosObjeto.length - 6
                final = animesLancamentosObjeto.length
            }else{
                inicio--
                final--
            }
            
            const li = lancamentos.querySelectorAll("li")
            for(let i = 0; i < li.length; i++){
                lancamentos.removeChild(li[i])
            }
            
            
            return elemetos(0)
        })
    
    //fazendo reconhecer o click do botao >
    function click(x){
        const li = lancamentos.querySelectorAll("li")
        
        if(final > animesLancamentosObjeto.length - 1){
            inicio = 0
            final = 6  

        }else{
            inicio++
            final++
        }
        
        for(let i = 0; i < li.length; i++){
            lancamentos.removeChild(li[i])
        }
        
        
        return elemetos(0)
    
    }
        document.getElementsByClassName("lado")[1].addEventListener("click", click)

    //criando a funtion que roda os objetos
        function elemetos(){
            for (let i = inicio; i < final; i++) {
                animesLacamentos(animesLancamentosObjeto[i]) 
                if(animesLancamentosObjeto.length > 10){
                    animesLancamentosObjeto.pop()
                }  
            }
        }

    //chamando a fution

        ///adicionado recentemente
            elemetos()

//criando a parte do adicionados recentemente
    const navAdicionadoRecentemente = document.getElementsByClassName("lancamento")[1]
    //criando a ul do adicionados recentemente
        const adicionadoRecentementeUl = document.createElement("ul")
        adicionadoRecentementeUl.className = "ul"
    
    //criando a function
        function animesRecentes(x){
            //criando a li
                const li = document.createElement("li")

            //criando a figure
                const figure = document.createElement("figure")
                li.appendChild(figure)
           
            //criando a tag a
                const a = document.createElement("a")
                a.href = "#"
                li.appendChild(a)

            //criando a img
                const img = document.createElement("img")
                img.src = x.image
                img.alt = x.name
                figure.appendChild(img)
                
            
            //criando a tag figurecaption
                const figureCaption = document.createElement("figcaption")
                figureCaption.innerText = x.name
                figure.appendChild(figureCaption)

            //criando a tag p fora do figure dentro da tag a
                const p = document.createElement("p")
                p.innerText = x.name
                p.className = "p2"
                a.appendChild(p)

                const p2 = document.createElement("p")
                p2.innerText = x.ep
                p2.className = "p2 " + "p3"
                a.appendChild(p2)


            //adicionando a li dentro da ul
            adicionadoRecentementeUl.appendChild(li)

        return navAdicionadoRecentemente.appendChild(adicionadoRecentementeUl)
    }

    //criando a funtion que roda os objetos
       function elemetos2(){
        for (let i = 0; i < adicionadosRecent.length; i++) {
            animesRecentes(adicionadosRecent[i])   
            
            if(adicionadosRecent.length > 16){
                adicionadosRecent.pop()
            }
        }


    }

    /// Chamado a funtion
        elemetos2()

//parte do filme adicionados
    
    //pegando o navlancamentos do filmes adicionado
    const filme = document.getElementsByClassName("lancamento")[2]

    //criando a ul do filmesAdicionados
    const filmesAdicionadosUL = document.createElement("ul")

     //Criando a funtion que vai criar os itens da tela
     function filmeAdicionados(x){
        //criando a li
            const li = document.createElement("li")

        //criando a tag a
            const a = document.createElement("a")
            a.href = "#"
            li.appendChild(a)

        //criando a figure
            const figure = document.createElement("figure")
            a.appendChild(figure)

        //criando a img
            const img = document.createElement("img")
            img.src = x.image
            img.alt = x.name
            figure.appendChild(img)
            
        
        //criando a tag figurecaption
            const figureCaption = document.createElement("figcaption")
            figureCaption.innerText = x.name
            figure.appendChild(figureCaption)

        //criando a tag p fora do figure dentro da tag a
            const p = document.createElement("p")
            p.innerText = x.name
            a.appendChild(p)


        //adicionando a li dentro da ul
        filmesAdicionadosUL.appendChild(li)

        return filme.appendChild(filmesAdicionadosUL)
    }


    //criando um sistema de botao
    let inicio1 = 0
    let final1 = 6    

    //fazendo reconhecer o click do botao para o lado <
        document.getElementsByClassName("lado")[2].addEventListener("click", function(){
            if(inicio1 <= 0){
                inicio1 = filmesAdicionados.length - 6
                final1 = filmesAdicionados.length
            }else{
                inicio1--
                final1--
            }
            
            const li = filmesAdicionadosUL.querySelectorAll("li")
            for(let i = 0; i < li.length; i++){
                filmesAdicionadosUL.removeChild(li[i])
            }
            
            
            return elemetos1()
        })

    //fazendo reconhecer o click do botao >
        document.getElementsByClassName("lado")[3].addEventListener("click", function() {
            const li = filmesAdicionadosUL.querySelectorAll("li")

            if(final1 > filmesAdicionados.length - 1){
                inicio1 = 0
                final1 = 6  

            }else{
                inicio1++
                final1++
            }

            for(let i = 0; i < li.length; i++){
                filmesAdicionadosUL.removeChild(li[i])
            }


            return elemetos1()
        })

    //criando a funtion que roda os objetos
        function elemetos1(){
            for (let i = inicio1; i < final1; i++) {
                filmeAdicionados(filmesAdicionados[i])
                if(filmesAdicionados.length > 10){
                    filmesAdicionados.pop()
                }   
            }
        }

    //chamando a fution
        elemetos1()

//Parte do ÚLTIMOS ANIMES ADICIONADO
    //pegando o navlancamentos do ultimos adicionado
        const  utAnimesNav = document.getElementsByClassName("lancamento")[3]

    //criando a ul do filmesAdicionados
        const utAnimesUL = document.createElement("ul")

     //Criando a funtion que vai criar os itens da tela
        function utAnimesFunction(x){
            //criando a li
                const li = document.createElement("li")

            //criando a tag a
                const a = document.createElement("a")
                a.href = "#"
                li.appendChild(a)

            //criando a figure
                const figure = document.createElement("figure")
                a.appendChild(figure)

            //criando a img
                const img = document.createElement("img")
                img.src = x.image
                img.alt = x.name
                figure.appendChild(img)
                
            
            //criando a tag figurecaption
                const figureCaption = document.createElement("figcaption")
                figureCaption.innerText = x.name
                figure.appendChild(figureCaption)

            //criando a tag p fora do figure dentro da tag a
                const p = document.createElement("p")
                p.innerText = x.name
                a.appendChild(p)


            //adicionando a li dentro da ul
            utAnimesUL.appendChild(li)

            return utAnimesNav.appendChild(utAnimesUL)
        }


    //criando um sistema de botao
        let inicio2 = 0
        let final2 = 6    

    //fazendo reconhecer o click do botao para o lado <
        document.getElementsByClassName("lado")[4].addEventListener("click", function(){
            if(inicio2 <= 0){
                inicio2 = utAnimes.length - 6
                final2 = utAnimes.length
            }else{
                inicio2--
                final2--
            }
            
            const li = utAnimesUL.querySelectorAll("li")
            for(let i = 0; i < li.length; i++){
                utAnimesUL.removeChild(li[i])
            }
            
            
            return elemetos3()
        })

    //fazendo reconhecer o click do botao >
        document.getElementsByClassName("lado")[5].addEventListener("click", function() {
            const li = utAnimesUL.querySelectorAll("li")

            if(final2 > utAnimes.length - 1){
                inicio2 = 0
                final2 = 6  

            }else{
                inicio2++
                final2++
            }

            for(let i = 0; i < li.length; i++){
                utAnimesUL.removeChild(li[i])
            }


            return elemetos3()
        })

    //criando a funtion que roda os objetos
        function elemetos3(){
            for (let i = inicio2; i < final2; i++) {
                utAnimesFunction(utAnimes[i]) 
                if(utAnimes.length > 9){
                    utAnimes.pop()
                }     
            }
        }

    //chamando a fution

    ///adicionado ultimos animes adicionados
        elemetos3()

/// parte top 10 ep  da semana
    const top10Nav = document.getElementsByClassName("lancamento")[4]
//criando a ul do adicionados recentemente
    const top10UL = document.createElement("ul")
    top10UL.className = "ul ul5"

//criando a function
    function top10Fuction(x){
        //criando a li
            const li = document.createElement("li")

        //criando a figure
            const figure = document.createElement("figure")
            li.appendChild(figure)
       
        //criando a tag a
            const a = document.createElement("a")
            a.href = "#"
            li.appendChild(a)

        //criando a img
            const img = document.createElement("img")
            img.src = x.image
            img.alt = x.name
            figure.appendChild(img)
            
        
        //criando a tag figurecaption
            const figureCaption = document.createElement("figcaption")
            figureCaption.innerText = x.name
            figure.appendChild(figureCaption)

        //criando a tag p fora do figure dentro da tag a
            const p = document.createElement("p")
            p.innerText = x.name
            p.className = "p2"
            a.appendChild(p)

            const p2 = document.createElement("p")
            p2.innerText = x.ep
            p2.className = "p2 " + "p3"
            a.appendChild(p2)


        //adicionando a li dentro da ul
        top10UL.appendChild(li)

    return top10Nav.appendChild(top10UL)
}
 
    //criando um sistema de botao
        let inicio5 = 0
        let final5 = 4    

    //fazendo reconhecer o click do botao para o lado <
        document.getElementsByClassName("lado")[6].addEventListener("click", function(){
            const li = top10UL.querySelectorAll("li")
            
            if(inicio5 <= 0){
                inicio5 = melhoreEpObjeto.length - 4
                final5 = melhoreEpObjeto.length
            }else{
                inicio5--
                final5--
            }
            

            
            for(let i = 0; i < li.length; i++){
                top10UL.removeChild(li[i])
            }
            
            
            return elemetos4()
        })

    //fazendo reconhecer o click do botao >
        document.getElementsByClassName("lado")[7].addEventListener("click", function() {
            const li = top10UL.querySelectorAll("li")

            if(final5 > melhoreEpObjeto.length - 1){
                inicio5 = 0
                final5 = 4 

            }else{
                inicio5++
                final5++
            }

            for(let i = 0; i < li.length; i++){
                top10UL.removeChild(li[i])
            }


            return elemetos4()
        })


//criando a funtion que roda os objetos
   function elemetos4(){
        for (let i = inicio5; i < final5; i++) {
            top10Fuction(melhoreEpObjeto[i])  
            if(melhoreEpObjeto.length > 9){
                melhoreEpObjeto.pop()
            } 
        }
    }

/// Chamado a funtion
    elemetos4()


//criando a fuction para adicionar animes novo
    function animesAdd(qual,name,image,ep){
        let objetoAdd = [{
            name: "",
            image: "",
            ep: ""
        }]

        if(qual == 1){
            lancamentos.innerHTML = ""
            objetoAdd.name = name
            objetoAdd.image = image
            animesLancamentosObjeto.unshift(objetoAdd)
            return  elemetos()
        }else if(qual == 2){
            adicionadoRecentementeUl.innerHTML = ""
            objetoAdd.name = name
            objetoAdd.image = image
            objetoAdd.ep = ep
            adicionadosRecent.unshift(objetoAdd)
            return elemetos2()
        }else if(qual == 3){
            filmesAdicionadosUL.innerHTML = ""
            objetoAdd.name = name
            objetoAdd.image = image
            filmesAdicionados.unshift(objetoAdd)
            return elemetos1()
        }else if(qual == 4){
            utAnimesUL.innerHTML = ""
            objetoAdd.name = name
            objetoAdd.image = image
            utAnimes.unshift(objetoAdd)
            return elemetos3()
        }else if (qual == 5){
            top10UL.innerHTML = ""
            objetoAdd.name = name
            objetoAdd.image = image
            objetoAdd.ep = ep
            melhoreEpObjeto.unshift(objetoAdd)
            return elemetos4()
        }
        
   
    }
    //adicionar no lancamentos
        let animesAdicionarName = [ 
                                    "Deaimon",
                                    "Yu☆Gi☆Oh!: Go Rush!!",
                                ]
        let animesAdicionarImage = [    
                                        "https://animesup.biz/wp-content/uploads/2022/04/8A5JbPh3cpoYRF1SonFdaTw6Vs4-185x278.jpg",
                                        "https://animesup.biz/wp-content/uploads/2022/04/1FaQie0ayahBsljna8F3I0m45Rg-185x278.jpg",
                                ]

    //adicionar no adicionados recentimente
        let animesAddRecentesNome = [   
                                        "Deaimon",
                                        "Yu☆Gi☆Oh!: Go Rush!!",
                                        "Healer Girl",
                                        "Shijou Saikyou no Daimaou, Murabito A ni Tensei Suru",
                                    ]
        let animesAddRecentesImage = [  "https://animesup.biz/wp-content/uploads/2022/05/1PTox6WkYQGJwy77lQ5G4gljOiD-300x170.jpg",
                                        "https://animesup.biz/wp-content/uploads/2022/05/pic3-300x170.jpg",
                                        "https://animesup.biz/wp-content/uploads/2022/05/uHWr0iwBIZC3nwjWldlYvxIf30T-300x170.jpg",
                                        "https://animesup.biz/wp-content/uploads/2022/05/pic4-300x170.jpg",
                                    ]
        let animesAddRecentesEp = [
                                    "Episódio 6",
                                    "Episódio 6",
                                    "Episódio 6",
                                    "Episódio 6",
                                ]

    //parte do filmes
        let filmeAdicionadorName = [
                                     "Pokémon Filme 13: Zoroark – Mestre das Ilusões",
                                     "Pokémon o Filme 16: Genesect e a Lenda Revelada",
                                     "Pokémon o Filme 14.2: Preto – Victini e Reshiram",
                                   ]
        let filmeAdicionadorImage = [
                                     "https://animesup.biz/wp-content/uploads/2022/05/zGKwjx1hl7I9ef5RlKrGQh5fL1w-185x278.jpg",
                                     "https://animesup.biz/wp-content/uploads/2022/05/twhBtwnnLHV5bbgAPilKYHFMzli-185x278.jpg",
                                     "https://animesup.biz/wp-content/uploads/2022/05/74GV0SdGJTsXdC8Q56VFJOu6TDJ-185x278.jpg",
                                    ]
   ///parte ÚLTIMOS ANIMES ADICIONADOS
        let ultimosAddName = [
                                "Koi wa Sekai Seifuku no Ato de Dublado",
                                "Aoashi Dublado",
                                "Rikei ga Koi ni Ochita no de Shoumei shitemita. 2 Dublado",
                             ]
        let ultimosAddImage = [
                                "https://animesup.biz/wp-content/uploads/2022/05/8FEplbf1ue1OHnhb0ZELW2BwVTY-185x278.jpg",
                                "https://animesup.biz/wp-content/uploads/2022/04/etMqelj6xjhOl84gkiQq8S1mDXJ-185x278.jpg",
                                "https://animesup.biz/wp-content/uploads/2022/04/xrfkZ2ssystUfl8sLnBfZQi2CcM-185x278.jpg",
                              ]
    //parte do top10
        let top10Name = [
                            "Tate no Yuusha no Nariagari 2",
                            "SPY×FAMILY",
                            "SPY×FAMILY",
                            "Shijou Saikyou no Daimaou, Murabito A ni Tensei Suru",
                            "Yuusha, Yamemasu",
                            "SPY×FAMILY",
                        ]
        let top10Image = [
                            "https://animesup.biz/wp-content/uploads/2022/04/wcM5N0hGZ0eWEjF0JawRcxmIUnd-300x170.jpg",
                            "https://animesup.biz/wp-content/uploads/2022/04/3EwkiSokUJRkAwB3b3bFG3J8IoA-300x170.jpg",
                            "https://animesup.biz/wp-content/uploads/2022/04/p1Lc2qF4Gk6kRiriOjVe1fdygFF-300x170.jpg",
                            "https://animesup.biz/wp-content/uploads/2022/04/xjkNTNr7s4pDju0PTXINr9QD6as-300x170.jpg",
                            "https://animesup.biz/wp-content/uploads/2022/04/GHpdM2ZAVBXMsSwIq1QCP7L5Z0-300x170.jpg",
                            "https://animesup.biz/wp-content/uploads/2022/04/uwbtHcFIl9HIt2AfxRMFjKkaHb3-300x170.jpg",

                        ]
        let top10Ep = [
                            "Episódio 2",
                            "Episódio 1",
                            "Episódio 2",
                            "Episódio 1",
                            "Episódio 1",
                            "Episódio 4",
                        ]


   //function que adiciona os animes
        function animesAddQuantidade(qual,quantidadesAnimes,nameArray,imageArray,epArray){
            for (let i = 0; i < quantidadesAnimes; i++) {
                
                if(qual == 1 || qual == 3){
                    animesAdd(qual,nameArray[i],imageArray[i])
                }else if(qual == 2 || qual == 5){
                    animesAdd(qual,nameArray[i],imageArray[i],epArray[i])
                }else if(qual == 4){
                    animesAdd(qual,nameArray[i],imageArray[i])
                }
            }
            return
        }
    
    //adicionando os animes
        animesAddQuantidade(1,animesAdicionarName.length,animesAdicionarName,animesAdicionarImage)

        animesAddQuantidade(2,animesAddRecentesEp.length, animesAddRecentesNome, animesAddRecentesImage, animesAddRecentesEp)

        animesAddQuantidade(3,filmeAdicionadorName.length,filmeAdicionadorName,filmeAdicionadorImage)

        animesAddQuantidade(4,ultimosAddName.length,ultimosAddName,ultimosAddImage)

        animesAddQuantidade(5,top10Name.length, top10Name, top10Image, top10Ep)

        

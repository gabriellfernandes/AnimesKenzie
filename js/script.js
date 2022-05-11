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
        }
    }

    /// Chamado a funtion
        elemetos2()
        
       
       





    
        

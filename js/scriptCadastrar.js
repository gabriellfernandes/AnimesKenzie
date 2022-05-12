
//Pegar arquivor do formulario
    const tipo  =    document.getElementsByTagName("input")[0]
    const nome  =    document.getElementsByTagName("input")[1]
    const image =    document.getElementsByTagName("input")[2]
    const ep    =    document.getElementsByTagName("input")[3]
    const botao =    document.getElementsByTagName("input")[4]

//Criando o negocio que vai pega o evento
    botao.addEventListener("click",cadastrarAnime)
//Criando a funtion que vai adicionar o anime
    let tipos     =   ""
    let nomes     =   ""
    let images    =   ""
    let eps       =   ""
    
    function cadastrarAnime(){
        if(tipo.value != "" && nome.value !="" && image.value != ""){
            tipos  = tipo.value
            nomes  = nome.value
            images = image.value
            eps    = ep.value
            alert("Anime Cadastrado!!")
        }else{
            alert("Complete todos os itens do formulario")
        }
        
        tipo.value  = ""
        nome.value  = ""
        image.value = ""
        ep.value    = ""


        if(eps != "" && value != ""){
            animesAdicionarName.push(nomes)
            animesAdicionarImage.push(images)
            return console.log(animesAdicionarName,animesAdicionarImage)
        }else if(tipos != ""){
            animesAdicionarName.push(nomes)
            animesAdicionarImage.push(images)
            window.re
            return console.log(animesAdicionarName,animesAdicionarImage)
        }
    }
    
    

//criando a funtion que vai adicionar o anime la

import { Api } from "../Modules/api.js";
export function buttonSever(){
    document.body.addEventListener("click", (e) => {
         
         const a = document.getElementsByClassName("button")
         for(let i = 0; i < a.length; i++){
              if(e.target.id == a[i].id){
                     e.preventDefault()
                     alert("Aguarde Alguns segundo para o servidor ser trocado!")
                     if(a[i].id == 1){
                        Api.getEpisodiosWatchServD(localStorage.getItem("episodio"))
                     }else if(a[i].id == 2){
                        Api.getEpisodiosWatchServT(localStorage.getItem("episodio"))
                     }else{
                        Api.getEpisodiosWatchServP(localStorage.getItem("episodio"))
                     }
              }

         }
        
    })
}
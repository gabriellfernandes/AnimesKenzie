import { Api } from "../api.js"
import { animeDetailsHtml, animeEpisodio } from "../buttonSide.js";
import { buttonSever } from "./buttonServ.js";


if(localStorage.getItem('anime') == "tate-no-yuusha-no-nariagari-season-2"){
    localStorage.setItem('anime', "tate-no-yuusha-no-nariagari-2nd-season")
    Api.getEpisodiosWatch("tate-no-yuusha-no-nariagari-2nd-season")
}else{
    Api.getEpisodiosWatch(localStorage.getItem("episodio"))
}

animeDetailsHtml()
animeEpisodio()
buttonSever()
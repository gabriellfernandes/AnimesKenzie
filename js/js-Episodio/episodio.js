import { Api } from "../api.js"
import { animeDetailsHtml, animeEpisodio } from "../buttonSide.js";
import { buttonSever } from "./buttonServ.js";
if(localStorage.getItem('anime') == "tate-no-yuusha-no-nariagari-season-2"){
    const Img = await Api.getDetailsUn("tate-no-yuusha-no-nariagari-2nd-season")
    document.body.style.backgroundImage = `url(${Img.animeImg})`
    Api.getEpisodiosWatch("tate-no-yuusha-no-nariagari-2nd-season")
}else{
    const Img = await Api.getDetailsUn(localStorage.getItem("anime"))
    document.body.style.backgroundImage = `url(${Img.animeImg})`
    Api.getEpisodiosWatch(localStorage.getItem("episodio"))
}

animeDetailsHtml()
animeEpisodio()
buttonSever()
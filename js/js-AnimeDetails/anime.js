import { Api } from "../api.js";
import { animeDetailsHtml, animeEpisodio } from "../buttonSide.js";
if(localStorage.getItem('anime') == "tate-no-yuusha-no-nariagari-season-2"){
    const Img = await Api.getDetails("tate-no-yuusha-no-nariagari-2nd-season")
    document.body.style.backgroundImage = `url(${Img.animeImg})`
}else{
    const Img = await Api.getDetails(localStorage.getItem("anime"))
    document.body.style.backgroundImage = `url(${Img.animeImg})`
}

animeDetailsHtml()
animeEpisodio()
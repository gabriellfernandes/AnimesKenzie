import { animeDetailsHtml, animeEpisodio,  animeRecente} from "../buttonSide.js";
import { Api } from "../api.js";
if(localStorage.getItem('anime') == "tate-no-yuusha-no-nariagari-season-2"){
    localStorage.setItem('anime', "tate-no-yuusha-no-nariagari-2nd-season")
    Api.getDetails("tate-no-yuusha-no-nariagari-2nd-season")
}else{
    Api.getDetails(localStorage.getItem("anime"))
}

Api.getDetails(localStorage.getItem("anime"));
animeDetailsHtml()
animeEpisodio()
animeRecente()
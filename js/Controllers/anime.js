import { animeDetailsHtml, animeEpisodio,  animeRecente} from "./controllers.js";
import { Api } from "../Modules/api.js";

if(localStorage.getItem('anime') == "tate-no-yuusha-no-nariagari-season-2"){
    localStorage.setItem('episodio', "tate-no-yuusha-no-nariagari-2nd-season")
    Api.getDetails("tate-no-yuusha-no-nariagari-2nd-season")
}else{
    Api.getDetails(localStorage.getItem("anime"))
}


animeDetailsHtml()
animeEpisodio()
animeRecente()
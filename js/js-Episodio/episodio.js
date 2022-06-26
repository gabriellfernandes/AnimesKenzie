import { Api } from "../api.js"
import { animeDetailsHtml, animeEpisodio } from "../buttonSide.js";
import { buttonSever } from "./buttonServ.js";


console.log(localStorage.getItem("episodio"))
Api.getEpisodiosWatch(localStorage.getItem("episodio"))


animeDetailsHtml()
animeEpisodio()
buttonSever()
import { Api } from "../api.js"
import { animeDetailsHtml, animeEpisodio } from "../buttonSide.js";
import { buttonSever } from "./buttonServ.js";



Api.getEpisodiosWatch(localStorage.getItem("episodio"))


animeDetailsHtml()
animeEpisodio()
buttonSever()
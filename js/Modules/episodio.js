import { Api } from "./api.js";
import { animeDetailsHtml, animeEpisodio } from "../Controllers/controlles.js";
import { buttonSever } from "../Controllers/buttonServ.js";


console.log(localStorage.getItem("episodio"))
Api.getEpisodiosWatch(localStorage.getItem("episodio"))


animeDetailsHtml()
animeEpisodio()
buttonSever()
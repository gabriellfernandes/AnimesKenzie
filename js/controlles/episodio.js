import { Api } from "../Modules/api.js";
import { animeDetailsHtml, animeEpisodio } from "../controlles/controlles.js";
import { buttonSever } from "./buttonServ.js";


console.log(localStorage.getItem("episodio"))
Api.getEpisodiosWatch(localStorage.getItem("episodio"))


animeDetailsHtml()
animeEpisodio()
buttonSever()
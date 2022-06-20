import { Api } from "../api.js";
import { animeDetailsHtml, animeEpisodio } from "../buttonSide.js";
Api.getDetails(localStorage.getItem("anime"))

animeDetailsHtml()
animeEpisodio()
import { animeDetailsHtml, animeEpisodio,  animeRecente} from "../buttonSide.js";
import { Api } from "../api.js";
Api.getDetails(localStorage.getItem("anime"));
animeDetailsHtml()
animeEpisodio()
animeRecente()
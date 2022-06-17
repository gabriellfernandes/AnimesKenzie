export function button(){
    document.body.addEventListener("click", (e) => {
    if(e.target.className == "lado"){
         const scroll = document.getElementById("ul");
         
         scroll.style.transition = "0.8s";
         scroll.scrollLeft -= 250;
    }
    if(e.target.className == "lado lado1"){
         const scroll = document.getElementById("ul");
         scroll.style.transition = "0.8s";
         scroll.scrollLeft += 250;
    }
 }) 
}

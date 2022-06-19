export function button(){
    document.body.addEventListener("click", (e) => {
    
     const button = document.getElementsByClassName("lado")
     const button2 = document.getElementsByClassName("lado1")
    
    Array.from(button).forEach((elem, i) => {
          if(e.target.className == elem.className){
               const scroll = document.getElementsByClassName("Tip-ul")[i + 1]
               scroll.style.transition = "0.8s";
               scroll.scrollLeft -= 250;
               console.log(scroll)
          }
    })
         
    Array.from(button2).forEach((elem, i) => {
          if(e.target.className == elem.className){
               const scroll = document.getElementsByClassName("Tip-ul")[i + 1]
               scroll.style.transition = "0.8s";
               return scroll.scrollLeft += 250; 
          }
     })
     })
}

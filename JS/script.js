function Visible(){

    const parag = document.querySelector('.mon-parag');
    
    parag.classList.toggle("Monopacity-1");

    if(parag.style.display === "block"){
        parag.style.display = "none";
    }else{
        parag.style.display = "block";
    }  
  
}
   

function Visible_1(){

    const parag = document.querySelector('.mon-parag-1');
    
    parag.classList.toggle("Monopacity-1");

    if(parag.style.display === "block"){
        parag.style.display = "none";
    }else{
        parag.style.display = "block";
    }  
}

function Visible_2(){

    const parag = document.querySelector('.mon-parag-2');
    
    parag.classList.toggle("Monopacity-1");

    if(parag.style.display === "block"){
        parag.style.display = "none";
    }else{
        parag.style.display = "block";
    }  
}

function toogleMenu(){
    const menu = document.querySelector(".mon-nav");
    const bar =[
        document.querySelector(".bar-haut"), 
        document.querySelector(".bar-mi"),
        document.querySelector(".bar-bas")
    ]
   

    menu.classList.toggle("block-nav");

    if(menu.style.display === "flex"){
        menu.style.display = "none";

        for(let i = 0 ; i < bar.length ; i++){
            bar[i].style.rotate = "0deg";
            bar[0].style.top = "20%";
            bar[0].style.left = "auto";
            bar[1].style.opacity = "1";
            bar[1].style.transition = ".5s ease";
            bar[2].style.bottom = "20%";
            bar[2].style.right = "auto";
            
        }
    
    }else{
        menu.style.display = "flex";

        for(let i = 0 ; i < bar.length ; i++){
           if(i % 2 != 0){
            bar[i].style.rotate = "0deg";
            bar[i].style.display = "block";
           }else{
            bar[0].style.rotate = "45deg";
            bar[0].style.top = "45%";
            bar[0].style.left = "10%";
            bar[0].style.transition = ".5s ease";
            bar[1].style.opacity = "0";
            bar[1].style.transition = ".5s ease";
            bar[2].style.rotate = "-45deg";
            bar[2].style.bottom = "45%";
            bar[2].style.right = "10%";
            bar[2].style.transition = ".5s ease";

           
           }
        }
        
    }
}
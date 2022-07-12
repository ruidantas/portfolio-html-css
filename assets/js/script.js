function mudarcor(){

    const arrCores = ["aqua", "aliceblue", "aquamarine", "chartreuse", "chocolate", "cyan", "deepskyblue", "goldenrod", "gold", "greenyellow" , "lawngreen", "magenta", "lime", "mediumspringgreen", "springgreen", "orange", "peru", "yellow"];

    const cor = Math.floor(Math.random() * arrCores.length);
    const cor1 = arrCores[cor];

    const icon = document.querySelectorAll(".icon-skills, .icon-rede");
    for(let n of icon){
        n.style.backgroundColor = cor1;
    }

}
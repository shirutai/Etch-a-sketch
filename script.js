const container = document.querySelector(".container");

function divinator (numberOfDivs){
    for (let i = 0; i < numberOfDivs; i++) {
        const canvas = document.createElement("div");
        canvas.classList.add("column");
            for (let j = 0; j < numberOfDivs; j++) {
                const div = document.createElement("div");
                div.classList.add("pixels");
                canvas.appendChild(div);
                
            }
        container.appendChild(canvas)
    
}
}
divinator(16)


function trail (pixels){
    pixels.target.classList.add("onPixels");
    pixels.target.classList.remove("pixels")
}
document.querySelector(".container").addEventListener("mouseover", trail);

function reset (){
    let drawn = document.querySelectorAll(".onPixels");
    for (let elem of drawn){
        elem.classList.add("pixels");
        elem.classList.remove('onPixels');
    }
    

}

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", reset);



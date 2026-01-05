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
    if (!pixels.target.classList.contains("pixels")) return;
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

const colorBtn = document.getElementById("colorBtn");

const sizeBtn = document.getElementById("sizeBtn");


resetBtn.addEventListener("click", reset); 

let colorSwitch = false
colorBtn.addEventListener("click", () => {
    colorSwitch = !colorSwitch
    console.log(colorSwitch);
})

function color(pixels) {
    if (!pixels.target.classList.contains("pixels") && 
        !pixels.target.classList.contains("onPixels")) return;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    pixels.target.style.setProperty("--r", r);
    pixels.target.style.setProperty("--g", g);
    pixels.target.style.setProperty("--b", b);
}

colorBtn.addEventListener("click", () => {
    container.addEventListener("mouseover", color);
});







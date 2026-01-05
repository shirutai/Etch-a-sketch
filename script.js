const container = document.querySelector(".container");

const resetBtn = document.getElementById("resetBtn");

const colorBtn = document.getElementById("colorBtn");

const sizeBtn = document.getElementById("sizeBtn");

function divinator (numberOfDivs){
    if(numberOfDivs > 100){
        alert("u goofy ass, that is too damn big try bellow a 100")
        return;
    }
    if (numberOfDivs == null || undefined) {
        alert("That ain't no number partner");
    }
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

function reset (){
    let drawn = document.querySelectorAll(".onPixels");
    for (let elem of drawn){
        elem.style.setProperty("--r", "");
        elem.style.setProperty("--g", "");
        elem.style.setProperty("--b", "");
        elem.classList.add("pixels");
        elem.classList.remove('onPixels');
    }
    

}
resetBtn.addEventListener("click", reset); 

let colorSwitch = false
colorBtn.addEventListener("click", () => {
    colorSwitch = !colorSwitch
    console.log(colorSwitch);
})

function draw (pixels){
    if (!pixels.target.classList.contains("pixels") && 
        !pixels.target.classList.contains("onPixels"))return;

    pixels.target.classList.add("onPixels");
    pixels.target.classList.remove("pixels");

    if(colorSwitch == true){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        pixels.target.style.setProperty("--r", r);
        pixels.target.style.setProperty("--g", g);
        pixels.target.style.setProperty("--b", b);
    }
    else{
        pixels.target.style.setProperty("--r", 0);
        pixels.target.style.setProperty("--g", 0);
        pixels.target.style.setProperty("--b", 0);
    }
}
container.addEventListener("mouseover", draw);

let size = 16;
divinator(size);
function sizeFunc (){
    num = Number(prompt("what size do you want"));
    container.innerHTML = "";
    divinator(num);
}
sizeBtn.addEventListener("click", sizeFunc)
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

divinator(10)


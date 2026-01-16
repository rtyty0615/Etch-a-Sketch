const container = document.getElementById("container");



const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let square_number = prompt("Enter new canvas size (1-100, e.g: 16)", "16");
    if (!/^[0-9.,]+$/.test(square_number)){
        alert("Enter a whole number (1-100)")};
    const num = parseInt(square_number, 10);
    if (num < 1 || num > 100) {
        alert("Must be 1-100");
    } else {
        if (container.firstElementChild){
            container.innerHTML = "";
        }
        for (let i = 1; i <= num; i++) {
            const div_row = document.createElement("div");
            div_row.id = "square_row_" + i;
            container.appendChild(div_row);
            const square_row = document.getElementById("square_row_" + i);
            for (let j = 1; j <= num; j++) {
                const div_column = document.createElement("div");
                div_column.id = "square_column_" + j;
                let hoverCount = 0;
                div_column.addEventListener("mouseover", () => {
                    if (hoverCount < 10){
                        hoverCount++}
                    div_column.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${hoverCount / 10})`;
                });
                square_row.appendChild(div_column);
            }
        }
    }

})

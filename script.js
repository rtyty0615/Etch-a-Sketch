const container = document.getElementById("container");

let i = 0;
for (let i = 1; i <= 16; i++){
    const div_row = document.createElement("div");
    div_row.id = "square_row_" + i;
    container.appendChild(div_row);
    const square_row = document.getElementById("square_row_" + i);
    for (let j = 1; j <= 16; j++) {
        const div_column = document.createElement("div");
        div_column.id = "square_column_" + j;
        square_row.appendChild(div_column);
    }
}


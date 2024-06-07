
window.onload = function () {
    const startBtn = document.querySelector("#startBtn");
    startBtn.addEventListener("click", function () {
        const numberInput = document.querySelector("#numberInput");
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        }
        else {
            size = numberInput.value;
        }
        console.log(size);

        const tableArea = document.querySelector(".tableArea");
        const cellHTML = '<table class="w-auto">\n'
            + ('\t<tr>' + '<td></td>'.repeat(size) + '</tr>').repeat(size)
            + '</table>';
        tableArea.innerHTML = cellHTML;

        const tds = document.querySelectorAll("td");

        let curLoc = Math.floor(Math.random() * size * size);
        tds[curLoc].style.backgroundColor = "violet";
        console.log(curLoc);

        window.onkeydown = function (event) {
            if (event.keyCode < 37 || event.keycode > 40) return;
            tds[curLoc].style.backgroundColor = "white";
            let row = Math.floor(curLoc / size);
            let col = curLoc % size;

            switch (event.key) {
                case 'ArrowLeft':
                    col--;
                    if (col == 0) curLoc += (size - 1);
                    else curLoc--;
                    break;
                case 'ArrowUp':
                    curLoc -= size;
                    if (curLoc < 0) curLoc += size * size;
                    break;
                case 'ArrowDown':
                    curLoc += size;
                    if (curLoc >= size * size) curLoc -= size * size;
                    break;
                case 'ArrowRight':
                    col = curLoc % size;
                    if (col == size - 1) curLoc -= (size - 1);
                    else curLoc++;
                    break;
            }
            console.log(curLoc);

            tds[curLoc].style.backgroundColor = "violet";
        }

    });
}

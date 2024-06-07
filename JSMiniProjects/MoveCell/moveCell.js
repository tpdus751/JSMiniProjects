
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
                    curLoc += (col > 0 ? -1 : size-1);
                    break;
                case 'ArrowRight':
                    curLoc += (col < size-1) ? 1 : -(size-1);
                    break;
                case 'ArrowUp':
                    curLoc += (row > 0 ? -size : (size-1) * size);
                    break;
                case 'ArrowDown':
                    curLoc += Number((row < size-1) ? size : -(size-1)*size);
                    break;
                
            }
            console.log(curLoc);

            tds[curLoc].style.backgroundColor = "violet";
        }

    });
}

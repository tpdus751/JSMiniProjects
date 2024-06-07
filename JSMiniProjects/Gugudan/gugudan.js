window.onload = function () {
    const btnNode = document.querySelector("button");
    btnNode.addEventListener("click", function() {

        const danNum = document.querySelector("#danInput").value;
        console.log(danNum);
    
        document.querySelector("#danNumber").innerHTML = `${danNum}단`;
        
        const resultNode = document.querySelector("#result");
        let result = "";
        for (let i = 1; i <= 9; i++) {
            result += `${danNum} x ${i} = ${String(danNum * i).padStart(2,' ')}<br>`;
        }
        
        resultNode.innerHTML = result;
        document.querySelector(".displayArea").style.display = "block";
    });
}

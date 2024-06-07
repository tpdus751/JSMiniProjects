let tds; // 테이블의 모든 셀의 노드 collection
let curLoc; // 텍스트가 출력되는 셀 번호 ( 0 ~ size*size - 1)
let size; // 테이블의 가로, 세로 셀 수

window.onload = function startMouseClick() {
    // 웹문서가 모든 로딩된 후 button tag를 찾아서 click 이벤트에 event handler 등록
    const startBtn = document.querySelector("#startBtn")
    startBtn.onclick = function () {

        // 입력된 테이블 크기 가져오기. 입력된 값이 없으면 placeholder 값 사용
        const numberInput = document.querySelector("#numberInput");
        if (numberInput.value == "") {
            size = numberInput.placeholder;
        }
        else {
            size = numberInput.value;
        }
        console.log(size);
    
        // table을 생성할 node 가져오기
        const tableArea = document.querySelector(".tableArea")
    
        // <td></td>를 size만큼 반복하여 <tr>...</tr>을 만들고, <tr>...</tr>를 size만큼 반복하여 테이블 html 생성
        let tableHTML = '<table class="w-auto">\n'+('\t<tr>' + '<td></td>'.repeat(size) + '</tr>\n').repeat(size) + '</table>\n';
        //console.log(newHTML);
    
        // table을 생성한 node에 table HTML 추가
        tableArea.innerHTML = tableHTML;
    
        // random cell에 text를 출력하기 위한 변수 초기화
        tds = document.querySelectorAll("td");
        curLoc = 0;
    
        // random cell 텍스트 출력하고 click event handler 등록
        randomLocText();
    }
}

window.onkeydown = function(event) {
    if (event.key == "Enter") {
        startMouseClick();
        curLoc = 0;
    }
}

// random cell 텍스트 출력하고 click event handler 등록
function randomLocText() {
    // 현재 셀을 초기화
    tds[curLoc].innerHTML = "";
    tds[curLoc].onclick = null;

    // 새로운 셀을 random으로 선택
    curLoc = Math.floor(Math.random() * (size*size));
    console.log(curLoc)

    // 텍스트 출력
    tds[curLoc].innerHTML = "안녕^^";
    // 이벤트 handler 등록
    tds[curLoc].onclick = randomLocText;
}

// Mouse Click을 시작하기

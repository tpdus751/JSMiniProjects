window.onload = function() {
    const savedTodoList = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodoList) {
        for (let i = 0; i < savedTodoList.length; i++) {
            console.log(savedTodoList[i]);
            addTodoList(savedTodoList[i]);
        }
    }
    const todoInput = document.querySelector("#todoInput");
    const addBtn = document.querySelector("#addBtn");
    addBtn.addEventListener("click", function() {
        if (todoInput.value != "") addTodoList();
    });
}

function saveItems() { // 로컬에 데이터 저장하기

	const saveItems = []; // 빈 배열 할당
    const listArea = document.querySelector(".listArea");
	for (let node of listArea.children) {
        const textNode = node.querySelector("span");
	    const todoObj = {
	        todo: textNode.textContent,
	        check: node.classList.contains('check')
	    };
	    saveItems.push(todoObj);
	}
	console.log(JSON.stringify(saveItems));
	
	localStorage.setItem('todolist', JSON.stringify(saveItems));
}

function addTodoList(savedTodo) {
    if (savedTodo) {
        console.log(savedTodo)
    } else {
        console.log(todoInput.value);
    }

    const listArea = document.querySelector(".listArea");

    const liNode = document.createElement("li");
    const checkBtn = document.createElement("button");
    const todoText = document.createElement("span");
    const delBtn = document.createElement("button");

    
    liNode.appendChild(checkBtn);
    liNode.appendChild(todoText);
    liNode.appendChild(delBtn);
    listArea.appendChild(liNode);
    if (savedTodo) {
        todoText.innerText = savedTodo.todo;
        if (savedTodo.check) {
            todoText.classList.add("check");
            checkBtn.innerHTML = "✔";

        }
    } else {
        todoText.innerText = todoInput.value;
        todoInput.value = "";
    }
    console.log(todoInput.value);

    todoInput.value = "";
    delBtn.innerText = "X"

    checkBtn.classList.add("checkBtn");
    todoText.classList.add("todoText");
    delBtn.classList.add("delBtn");
    saveItems();

    checkBtn.addEventListener("click", function() {
        if (checkBtn.innerHTML == "") {
            checkBtn.innerHTML = "✔";
        }
        else {
            checkBtn.innerHTML = "";
        }
        todoText.classList.toggle("check");
        saveItems();
    })

    delBtn.addEventListener("click", function() {
        liNode.remove();
        saveItems();
    })

    console.log(listArea.lastChild);
}

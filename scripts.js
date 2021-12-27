const submitFormText = document.getElementById("submitForm");
const submitFormBtn = document.getElementById("submitBtn");
const saveEditBtn = document.getElementById("saveBtn");
const taskArea = document.getElementById("all-task-boxes");
const submitBoxVal = document.getElementById("submitBox");
const saveFormText = document.getElementById("saveForm");
const cancelEditBtn = document.getElementById("cancelBtn");
let taskArray = [];

submitFormBtn.addEventListener("click", (prevDef)=>{
    let tasks = localStorage.getItem("tasks");
    if (tasks === null){
        taskArray = [];
    }
    else {
        taskArray = JSON.parse(tasks);
    }
    taskArray.push(submitFormText.value);
    submitFormText.value = "";
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    showTasks();
});

function showTasks(){
    let tasks = localStorage.getItem("tasks");
    if(tasks === null){
        taskArray = [];
    }
    else{
        taskArray = JSON.parse(tasks);
    }
    let insertHTML = "";
    taskArray.forEach((element, index) => {
        insertHTML += `<div class="task-box">
        <label for="task-complete"></label>
        <input type="checkbox" id="index" name="index" value='index'>
        <h4>${element}</h4>
        <button onclick='editTask(${index})' class="editBtn">Edit</button>
        <button onclick='deleteTask(${index})' class="deleteBtn">Delete</button>
    </div>`
    taskArea.innerHTML = insertHTML;
    })
}
function deleteTask(index){
    let tasks = localStorage.getItem("tasks");
    taskArray = JSON.parse(tasks);
    taskArray.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    showTasks();
    
}

function editTask(index){
    let tasks = localStorage.getItem("tasks");
    taskArray = JSON.parse(tasks);
    submitBox.innerHTML = `<label for="saveForm"></label>
    <input type="text" id="saveForm" name="saveForm" value="${taskArray[index]}">
    <button id="saveBtn" onclick="saveTask(${index})">Save Task</button>
    <button id="cancelBtn" onclick='cancelTask'>Cancel</button>`;  
}

function saveTask(index){
    let tasks = localStorage.getItem("tasks");
    taskArray = JSON.parse(tasks);
    taskArray[index] = saveForm.value;
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    submitBoxVal.innerHTML = `<label for="submitForm"></label>
    <input type="text" id="submitForm" name="submitForm" value="Type your task here!">
<button id="submitBtn">Add Task</button>`;
    showTasks();
}
function cancelTask(){
    showTasks();
}




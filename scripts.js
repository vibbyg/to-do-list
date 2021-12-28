const submitFormText = document.getElementById("submitForm");
const submitFormBtn = document.getElementById("submitBtn");
const saveEditBtn = document.getElementById("saveBtn");
const taskArea = document.getElementById("all-task-boxes");
const submitBoxVal = document.getElementById("submitBox");
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
    submitFormText.value = "Type your task here!";
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
    saveEditBtn.style.display = "inline-block";
    submitFormBtn.style.display = "none";
    cancelEditBtn.style.display = "inline-block";
    let tasks = localStorage.getItem("tasks");
    taskArray = JSON.parse(tasks);
    submitFormText.value = taskArray[index];;
    saveEditBtn.addEventListener("click", () => {
    taskArray[index] = submitFormText.value;
    submitFormText.value = "Type your task here!";
    localStorage.setItem("tasks", JSON.stringify(taskArray));
    saveEditBtn.style.display = "none";
    submitFormBtn.style.display = "inline-block";
    cancelEditBtn.style.display = "none";
    showTasks(); 
    });
    cancelEditBtn.addEventListener("click", ()=>{
        submitFormText.value = "Type your text here!";
        saveEditBtn.style.display = "none";
        submitFormBtn.style.display = "inline-block";
        cancelEditBtn.style.display = "none";
    })
}




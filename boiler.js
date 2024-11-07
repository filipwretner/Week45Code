let toDoList = []; // Empty array that we fill with items

// Class that acts as a template for creating objects
class task {

    constructor(taskID, taskDescription, isCompleted) {
        this.taskID = taskID;
        this.taskDescription = taskDescription;
        this.isCompleted = isCompleted;
    }

}

// Hämtar element och tilldelar dem variabler
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList"); 
const message = document.getElementById("message");

taskForm.addEventListener("submit", (event) => { // Hanterar inmatning för att lägga till uppgfit

    event.preventDefault();

    let description = taskInput.value.trim(); 

    if (description) {
        addToDo(description);
        taskInput.value = ""; // Dessa två nedan tömmer inmatningsfält och meddelandet
        message.innerText = "";
    } else {
        message.innerText = "Fältet är tomt! Vänligen skriv in en uppgift";
    }

});

function addToDo(description) {

    // Generate a unique ID
    let newID;

    do {
        newID = parseInt(Math.random() * 100); // Automatically creates an ID between 1 and 100
    } while (toDoList.some(task => task.taskID === newID)); // Check if ID is in use

    //Create and return new task
    let newTask = new task(newID, description, false);

    toDoList.push(newTask); // Inserts the task in the list
    showToDo();

}

function showToDo() {

    message.innerText = "";
    taskList.innerHTML = ""; // Tömmer den varje gång vi kallar på funktionen, lägger sedan till elementen igen

    toDoList.forEach(task => { // För varje uppgift i arrayen lägger vi till HTML element

        const showTask = document.createElement("li"); // Skapar list element
        showTask.className = task.isCompleted ? "completed" : ""; // Sätter dit en klass beroende på om uppgiften är klar eller inte
        showTask.dataset.id = task.taskID; // Sätter ID för varje item som id i HTML

        const showDescription = document.createElement("p"); // Skapar p med beskrivning som text
        showDescription.textContent = task.taskDescription;

        const completeTask = document.createElement("button"); // Skapar en knapp för att markera uppgiften som klar
        completeTask.className = "completeButton";
        completeTask.textContent = "Markera uppgift som klar";
        completeTask.addEventListener("click", () => markAsCompleteToDo(task.taskID)); // Skickar med ID på den uppgiften man trycker på

        const deleteTask = document.createElement("button"); // Skapar en knapp för att ta bort uppgiften
        deleteTask.className = "deleteButton";
        deleteTask.textContent = "Ta bort uppgift";
        deleteTask.addEventListener("click", () => deleteToDo(task.taskID)); // Skickar med ID på den uppgiften man trycker på

        // Lägger till alla element i rätt ordning under li elementet
        showTask.appendChild(showDescription);
        showTask.appendChild(completeTask);
        showTask.appendChild(deleteTask);
        // Lägger till li elementet i ul
        taskList.appendChild(showTask); 
    });
}

function markAsCompleteToDo(taskID) {

    const task = toDoList.find(task => task.taskID === taskID);

    if (task) {
        task.isCompleted = !task.isCompleted;
        showToDo();
    }

}

function deleteToDo(taskID) {
    toDoList = toDoList.filter(task => task.taskID !== taskID);
    showToDo();
}

showToDo();
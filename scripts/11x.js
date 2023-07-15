// Algorithm - 1
// 1. Create array to store todos
// 2. When we click "add",
// 3. Get text from textbox
// 4. Add it to array
// 5. console.log() the array

// Algorithm - 2 Display todo list on the page
// 1. Loop through the array
// 2. Create some HTML code for each todo
// 3. Put the HTML on web page

let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'make diner',
    dueDate: '2022-12-22'
}, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
}]; // A-2

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dueDateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueDateInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: dueDate
        name,
        dueDate
    });
    inputElement.value = '';

    renderTodoList();
    saveToStorage();
}

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; // Destructuring 'name' & 'dueDate'
        const html = `
            <div>${name}</div>
            <div>${dueDate} </div> 
            <button class = "delete-button" onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                saveToStorage();
            ">Delete</button> 
        `; // Generating the HTML
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}



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

const todoList = ['make diner', 'wash dishes']; // A-2

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`; // Generating the HTML
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    console.log(name);
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
    renderTodoList();
}

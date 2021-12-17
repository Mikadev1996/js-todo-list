import {deleteTodoInProject, todos} from "./create-todo";
import {createElement} from "./index";
import {addTodoUI} from "./add-todo-ui";

function resetTodoList() {
    const todoUnorderedList = document.getElementById("default");
    todoUnorderedList.innerHTML = "";
}

function addTodoBtn(project) {
    const todoUnorderedList = document.getElementById("default");
    const addTodoBtnListItem = createElement("li", "new-todo-list-item", ["todo", "todo-btn"]);
    const addTodoBtn = createElement("button", null, ["add-todo"], "+ Add Todo");
    addTodoBtnListItem.append(addTodoBtn);
    todoUnorderedList.append(addTodoBtnListItem);

    addTodoBtn.onclick = () => {
        addTodoUI(project);
    };
}

function todoListUi(project) {
    const todoUnorderedList = document.getElementById("default");

    const todoList = todos[project].todos;
    todoList.forEach((todo) => {
        let listItem = createElement("li", `list-${project}-${todo.id}`, ["todo", "todo-item"]);

        let listContentDiv = createElement("div", null, ["list-content"]);
        let checkboxDiv = createElement("div", null, ["checkbox-div"]);
        let checkBoxBtn = createElement("button", `checkbox-${todo.id}`, ["checkbox-btn"]);

        // checkBoxBtn.onclick = () => {
        //     deleteTodoInProject(project, todo.id);
        //     refreshTodos(project);
        // }

        //move this to own function which resets, then copy delete
        //todo to viewfilters and create new reset function

        let checkboxImage = createElement("img", null, ["checkbox"]);
        checkboxImage.src = "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-check-mark-circle-thin.png&r=242&g=242&b=242";
        checkBoxBtn.append(checkboxImage);
        checkboxDiv.append(checkBoxBtn);

        let todoTextDiv = createElement("div", `${project}-list-text-${todo.id}`, ["list-text"], todo.title);
        let todoDescription = createElement("p", null, null, todo.description);
        let dateDisplayDiv = createElement("div", null, ["todo-date"], todo.date);
        todoTextDiv.append(todoDescription, dateDisplayDiv);

        listContentDiv.append(checkboxDiv, todoTextDiv);
        listItem.append(listContentDiv);
        todoUnorderedList.append(listItem);
    })
    const pageHeader = document.getElementById("page-header");
    pageHeader.textContent = `Project: ${project}`;

    return todoUnorderedList;
}

function checkButtonDeleteTodo(project) {
    const todoList = todos[project].todos;
    todoList.forEach((todo) => {
        let checkBoxBtn = document.getElementById(`checkbox-${todo.id}`)
        checkBoxBtn.onclick = () => {
            deleteTodoInProject(project, todo.id);
            refreshTodos(project);
        }
    })
}

function refreshTodos(project) {
    resetTodoList();
    todoListUi(project);
    addTodoBtn(project);
    checkButtonDeleteTodo(project)
}

export {todoListUi};
export {resetTodoList};
export {refreshTodos}
import moment from "moment";
import {todoListUi, resetTodoList, refreshTodos} from "./todo-list-ui";

const todoFactory = (id, title, description, date)  => {
    return {id, title, description, date}
};

let projects = [
    "Default",
    "Second",
]

let todos = {
    Default: {
        todos: [
            {
                id: 0,
                title: "Default Title",
                description: "First Todo!",
                date: moment().format('MMMM Do YYYY'),
            },
            {
                id: 1,
                title: "test",
                description: "Second",
                date: moment().format('MMMM Do YYYY'),
            },
        ]
    },
    Second: {
        todos: [
            {
                id: 0,
                title: "Second Title",
                description: "Second Description!",
                date: moment().format('MMMM Do YYYY'),
            },
        ]

    },
};

function confirmAddTodo(project) {
    const titleText = document.getElementById("default-title").value;
    const descText = document.getElementById("default-desc").value;
    const date = document.getElementById(`${project}-calendar`).value;
    const newTodo = todoFactory(todos[project].todos.length, titleText, descText, date);


    if (titleText.length === 0) {
        window.alert("Please insert a title");
    } else {
        todos[project].todos.push(newTodo)
        refreshTodos(project);
    }
}

function deleteTodoInProject(project, id) {
    const todoList = todos[project].todos;
    console.log("delete todos: ", project, todoList)
    for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {
                todoList.splice(i, 1);
                break;
        }
    }
}

function updateLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("projects", JSON.stringify(projects));
}

export {confirmAddTodo, projects, todos, deleteTodoInProject, updateLocalStorage};


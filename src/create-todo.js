import {refreshTodos,} from "./mainPage";
import { compareAsc, format} from "date-fns";

const todoFactory = (id, title, description, date)  => {
    return {id, title, description, date}
};

let projects = [
    "default",
    "exampleSecond",
]

let todos = {
    default: {
        todos: [
            {
                id: 0,
                title: "Title",
                description: "First Todo",
                date: "Date DD/MM/YYYY",
            },

        ]
    },
    exampleSecond: {
        todos: [
            {
                id: 0,
                title: "Example Second",
                description: "Second Todo",
                date: "Date DD/MM/YYYY",
            },

        ]
    }
};

function confirmAddTodo(project) {
    const titleText = document.getElementById("default-title").value;
    const descText = document.getElementById("default-desc").value;
    const newTodo = todoFactory(todos[project].todos.length, titleText, descText, new Date());

    console.log(newTodo);
    if (titleText.length === 0) {
        window.alert("Please insert a title");
    } else {
        todos[project].todos.push(newTodo)
        refreshTodos(project);
    }
}

function deleteTodo(project, id) {
    const todoList = todos[project].todos;
    for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id === id) {
                todoList.splice(i, 1);
                break;
        }
    }
    refreshTodos(project);
}

export {confirmAddTodo, projects, todos, deleteTodo};


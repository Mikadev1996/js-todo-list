import {refreshTodos,} from "./main-page";
import { compareAsc, format} from "date-fns";
import moment from "moment";

const todoFactory = (id, title, description, date)  => {
    return {id, title, description, date}
};

let projects = [
    "Default",
]

let todos = {
    default: {
        todos: [
            {
                id: 0,
                title: "Default Title",
                description: "First Todo!",
                date: moment().format('MMMM Do YYYY'),
            },

        ]
    },
};

function confirmAddTodo(project) {
    const titleText = document.getElementById("default-title").value;
    const descText = document.getElementById("default-desc").value;
    const newTodo = todoFactory(todos[project].todos.length, titleText, descText, moment().format('MMMM Do YYYY'));

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


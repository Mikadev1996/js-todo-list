import moment from "moment";
import {refreshTodos, resetTodoList, test} from "./todo-list-ui";

const todoFactory = (id, title, description, date)  => {
    return {id, title, description, date}
};

let projects = [
    "Default",
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

        ]
    },
};

function confirmAddTodo(project) {
    const titleText = document.getElementById("default-title").value;
    const descText = document.getElementById("default-desc").value;
    const date = document.getElementById(`${project}-calendar`).value;
    let dateArray = date.split("-").join("");
    let dateFormatted = moment(dateArray).format("MMMM Do YYYY");

    const newTodo = todoFactory(todos[project].todos.length, titleText, descText, dateFormatted);



    if (titleText.length === 0) {
        window.alert("Please insert a title");
    } else {
        todos[project].todos.push(newTodo)
        test(project);
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
    test(project);
}

export {confirmAddTodo, projects, todos, deleteTodo};


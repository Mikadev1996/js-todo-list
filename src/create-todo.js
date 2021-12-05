import {refreshTodos} from "./mainPage";

const todoFactory = (id, project, title, description, date)  => {
    return {id, project, title, description, date}
};



let todos = [
    {
        id: 0,
        project: "Default",
        title: "Title",
        description: "First Todo",
        date: "Date DD/MM/YYYY",
    },
];


function confirmAddTodo(project) {
    const titleText = document.getElementById("default-title").value;
    const descText = document.getElementById("default-desc").value;
    const newTodo = todoFactory(todos.length ,project, titleText, descText, "Date");

    if (titleText.length === 0) {
        window.alert("Please insert a title");
    } else {
        todos.push(newTodo);
        refreshTodos();
    }
}

export {confirmAddTodo, todos};


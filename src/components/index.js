import '../style.css'
import {todos} from "./create-todo";
import {projects} from "./create-todo";
import {mainPage} from "./main-page";
import {overlay} from "./add-project-ui";
import {createProject} from "./create-project";
import {projectsListUi} from "./projects-list-ui";
import {filtersList} from "./view-filters";
import {refreshTodos} from "./todo-list-ui";


function createElement(type, id, classes, text) {
    const element = document.createElement(type);

    if (id) {element.id = id}

    if (classes) {
        classes.forEach(classItem => {
            element.classList.add(classItem);
        })
    }

    if (text) {element.textContent = text}

    return element;
}

function restoreLocalStorage() {
    let storedTodos = JSON.parse(localStorage.getItem("todos"));
    let storedProjects = JSON.parse(localStorage.getItem("projects"));
    if (storedTodos) {
        todos = storedTodos;
    }
    if (storedProjects) {
        projects = storedProjects;
    }
    refreshTodos("Default")
}

document.body.append(overlay(), mainPage())
restoreLocalStorage();
filtersList();
projectsListUi();
createProject();

export {createElement}
import '../style.css'
import {mainPage, refreshTodos} from "./main-page";
import {overlay} from "./add-project-ui";
import {createProject} from "./create-project";
import {projectsListUi} from "./projects-list-ui";
import {filtersList} from "./view-filters";


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


document.body.append(overlay(), mainPage())

refreshTodos("Default");
filtersList();
projectsListUi();
createProject();

export {createElement}
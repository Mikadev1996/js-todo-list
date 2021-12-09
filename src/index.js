import './style.css'
import {mainPage} from "./mainPage";
import {refreshTodos} from "./mainPage";
import {addProjectListener, overlay} from "./add-project-ui";
import {renderProjects} from "./render-projects";


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

refreshTodos("default");
renderProjects();
addProjectListener();

export {createElement}
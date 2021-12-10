import './style.css'
import {mainPage} from "./main-page";
import {refreshTodos} from "./main-page";
import {addProjectListener, overlay} from "./add-project-ui";
import {renderProjectsList} from "./render-projects-list";


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
renderProjectsList();
addProjectListener();

export {createElement}
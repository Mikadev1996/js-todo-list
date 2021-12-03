import './style.css'
import {mainPage} from "./mainPage";

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

document.body.appendChild(mainPage());


export {createElement}
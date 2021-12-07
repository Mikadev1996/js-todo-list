import './style.css'
import {mainPage} from "./mainPage";
import {refreshTodos} from "./mainPage";

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
refreshTodos();

let test = document.getElementById("default")
console.log(test);

export {createElement}
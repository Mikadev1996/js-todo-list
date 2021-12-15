import '../style.css'
import {mainPage} from "./main-page";
import {overlay} from "./add-project-ui";
import {createProject} from "./create-project";
import {projectsListUi} from "./projects-list-ui";
import {filtersList} from "./view-filters";
import {refreshTodos, resetTodoList, test} from "./todo-list-ui";


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

console.log(new Date().getSeconds());
document.body.append(overlay(), mainPage())
test("Default");
filtersList();
projectsListUi();
createProject();

export {createElement}
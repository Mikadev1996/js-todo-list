import {projects, todos} from "./create-todo";
import {createElement} from "./index";
import {todoListUi, resetTodoList, refreshTodos} from "./todo-list-ui";

function projectsListUi() {
    const projectList = document.getElementById("projects-list");
    projectList.innerHTML = "";

    const headerDiv = createElement("div", null, ["add-project"], null);
    const projectHeader = createElement("header", null, ["menu-item", "bold"], "Projects");
    const addProject = createElement("div", "add-project", null, "+");

    headerDiv.append(projectHeader, addProject)
    projectList.append(headerDiv);
    projects.forEach((project) => {
        let projectListItem = createElement("li", null, ["menu-item"], project);
        projectListItem.addEventListener("click", () => {
            refreshTodos(project);
        })
        projectList.append(projectListItem);
    })
}

export {projectsListUi}
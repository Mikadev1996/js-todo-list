import {projects, todos} from "./create-todo";
import {createElement} from "./index";
import {refreshTodos, resetTodoList, test} from "./todo-list-ui";

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
            test(project);
        })
        projectList.append(projectListItem);
    })
}

export {projectsListUi}
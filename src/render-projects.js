import {projects, todos} from "./create-todo";
import {createElement} from "./index";
import {refreshTodos} from "./mainPage";

function renderProjects() {
    const projectList = document.getElementById("projects-list");
    projectList.innerHTML = "";

    const headerDiv = createElement("div", null, ["add-project"], null);
    const projectHeader = createElement("header", null, ["menu-item", "bold"], "Projects");
    const addProject = createElement("div", "add-project", null, "+");

    headerDiv.append(projectHeader, addProject)
    projectList.append(headerDiv);
    projects.forEach((project) => {
        console.log(project)
        console.log(todos[project]);
        let projectListItem = createElement("li", null, ["menu-item"], project);
        projectListItem.addEventListener("click", () => {
            refreshTodos(project);
        })
        projectList.append(projectListItem);
    })
}

export {renderProjects}
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
        let projectListItem = createElement("li", null, null, project);
        let listItemDiv = createElement("div", null, ["menu-item"]);
        let projectRemoveBtn = createElement("div", `${project}-remove-cross`, ["remove-cross"], "x");

        projectListItem.onclick = () => {
            refreshTodos(project);
        }

        projectListItem.addEventListener("mouseover", () => {
            projectRemoveBtn.style.opacity = "0.7";
        })

        projectListItem.addEventListener("mouseleave", () => {
            projectRemoveBtn.style.opacity = "0";
        })

        projectRemoveBtn.onclick = () => {
            for (let i = 0; i < projects.length; i++) {
                if (projects[i] === project) {
                    projects.splice(i, 1);
                    break;
                }
            }
            delete todos[project];
            if (projects.length === 0) {
                const pageHeader = document.getElementById("page-header");
                pageHeader.textContent = "Create a Project";
                const todoUnorderedList = document.getElementById("default");
                todoUnorderedList.innerHTML = "";
            }

            else {
                projects.forEach((item) => {
                    refreshTodos(item);
                })
            }
            projectsListUi();
        }

        listItemDiv.append(projectListItem ,projectRemoveBtn);
        projectList.append(listItemDiv);
    })
}

export {projectsListUi}
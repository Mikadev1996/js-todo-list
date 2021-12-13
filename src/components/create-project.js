import {projects, todos} from "./create-todo";
import {projectsListUi} from "./projects-list-ui";

function createProject() {
    const confirmProject = document.getElementById("project-confirm");
    const newProjectTitle = document.getElementById("project-name-input");
    const overlay = document.getElementById("overlay");

    confirmProject.onclick = () => {
        if (newProjectTitle.value.length !== 0 && (!todos[newProjectTitle.value])) {
            projects.push(newProjectTitle.value);
            updateTodoProjects(newProjectTitle.value);
            projectsListUi();
            resetDropDown();
        } else {
            window.alert("Please Enter a Unique Project Name");
        }
    }

    function updateTodoProjects(project) {
        todos[project] = {
            todos:  [

            ]
        }
    }

    window.addEventListener("click", handleClick)

    function handleClick(input) {
        if (input.target.id === "overlay") {
            resetDropDown();
        }
        else if (input.target.id === "add-project") {
            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "all";
        }
        else if (input.target.id === "cancel-project") {
            resetDropDown();
        }
    }

    function resetDropDown() {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    }
}

export {createProject}
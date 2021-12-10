import {createElement} from "./index";
import {todos} from "./create-todo";
import {projects} from "./create-todo";
import {renderProjects} from "./render-projects";



function addProjectListener() {
    const confirmProject = document.getElementById("project-confirm");
    const newProjectTitle = document.getElementById("project-name-input");
    const overlay = document.getElementById("overlay");



    confirmProject.onclick = () => {
        if (newProjectTitle.value.length !== 0 && (!todos[newProjectTitle.value])) {
            projects.push(newProjectTitle.value);
            updateTodoProjects(newProjectTitle.value);
            renderProjects();
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

function overlay() {
    const overlay = createElement("div", "overlay");
    const projectBox = createElement("div", "add-project-box");
    const header = createElement("header", "project-header", null, "Add Project");
    const formDiv = createElement("div", "project-form-div");

    const projectNameDiv = createElement("div", null, ["text-inputs"]);
    const projectName = createElement("input", "project-name-input");
    projectName.type = "text";
    projectNameDiv.append(projectName);
    formDiv.append(projectNameDiv);

    function options() {
        const optionsDiv = createElement("div", "project-options", ["options"]);
        const confirmDiv = createElement("div");
        const confirmBtn = createElement("button", "project-confirm", ["option-btn", "add-todo"], "Confirm Project");
        confirmDiv.append(confirmBtn)

        const cancelDiv = createElement("div");
        const cancelBtn = createElement("button", "cancel-project", ["option-btn", "cancel-add-todo"], "Cancel");
        cancelDiv.append(cancelBtn)

        optionsDiv.append(confirmDiv, cancelDiv);

        return optionsDiv;
    }

    projectBox.append(header, formDiv, options());
    overlay.append(projectBox)
    return overlay;


}

export {addProjectListener, overlay};
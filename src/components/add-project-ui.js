import {createElement} from "./index";

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

export {overlay};
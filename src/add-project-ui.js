import {createElement} from "./index";

function addProjectListener() {
    const addProjectBtn = document.getElementById("add-project");
    const editor = document.getElementById("editor");
    const overlay = document.getElementById("overlay");


    addProjectBtn.onclick = () => {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "all";

    };
}


function overlay() {
    const overlay = createElement("div", "overlay");
    const projectBox = createElement("div", "add-project-box");


    overlay.append(projectBox)
    return overlay;
}

export {addProjectListener, overlay};
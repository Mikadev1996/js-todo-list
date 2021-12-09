import {createElement} from "./index";

function addProjectListener() {
    const addProjectBtn = document.getElementById("add-project");
    const editor = document.getElementById("editor");
    const overlay = document.getElementById("overlay");
    console.log(addProjectBtn, editor, overlay)
    // addProjectBtn.onclick = () => {
    //     overlay.style.opacity = "1";
    //     overlay.style.pointerEvents = "all";
    // };

    // overlay.onclick = () => {
    //     overlay.style.opacity = "0";
    //     overlay.style.pointerEvents = "none";
    // }

    window.addEventListener("click", handleClick)

    function handleClick(input) {
        console.log(input.target.id);
        if (input.target.id === "overlay") {
            overlay.style.opacity = "0";
            overlay.style.pointerEvents = "none";
        }
        else if (input.target.id === "add-project") {
            overlay.style.opacity = "1";
            overlay.style.pointerEvents = "all";
        }
    }
}

function overlay() {
    const overlay = createElement("div", "overlay");
    const projectBox = createElement("div", "add-project-box");


    overlay.append(projectBox)
    return overlay;
}

export {addProjectListener, overlay};
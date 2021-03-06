import {projects, todos} from "./create-todo";
import {projectsListUi} from "./projects-list-ui";
import {refreshTodos} from "./todo-list-ui";

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
        const projectName = document.getElementById("project-name-input");
        projectName.value = "";
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    }
    //
    // (function deleteProject() {
    //     const removeButtons = document.getElementsByClassName("remove-cross");
    //     window.addEventListener("click", (e) => {
    //         console.log(e.key)
    //     });

    //
    //     for (let i = 0; i < removeButtons.length; i++) {
    //         console.log(removeButtons[i]);
    //         removeButtons[i].onclick = () => console.log("button clicked");
    //         removeButtons[i].onclick = () => {
    //                 let id = removeButtons[i].id.split("-")[0];
    //                 for (let i = 0; i < projects.length; i++) {
    //                     if (projects[i] === id) {
    //                         projects.splice(i, 1);
    //                         break;
    //                     }
    //                 }
    //                 delete todos[id];
    //
    //                 // projects.forEach(project => {
    //                 //     console.log(project, todos[project])
    //                 // });
    //         }
    //     }
    // })();


}

export {createProject}
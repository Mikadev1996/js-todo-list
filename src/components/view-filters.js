import {createElement} from "./index.js";
import {deleteTodoInProject, todos} from "./create-todo";
import {projects} from "./create-todo";
import {resetTodoList, todoListUi} from "./todo-list-ui";

let menuItems = ["Inbox"];

function filtersList() {
    const filtersListElement = document.getElementById("filters-list")

    menuItems.forEach((item) => {
        let menuListItem = createElement("li", `filter-${item.toLowerCase()}`, ["menu-item"], item);
        filtersListElement.append(menuListItem);
    })

    const inbox = document.getElementById("filter-inbox");
    // const today = document.getElementById("filter-today");
    // const week = document.getElementById("filter-week");

    inbox.onclick = () => filterInbox();
    // today.onclick = () => filterToday();
    // week.onclick = () => filterWeek();

    const todoListElement = document.getElementById("default");

    function filterInbox() {
        todoListElement.innerHTML = "";

        projects.forEach((project) => {
            let todoCollection = todos[project].todos;
            todoListUi(project);

            todoCollection.forEach((todo) => {
                let projectName = createElement("p", null, null, `Project: ${project}`);
                projectName.style.color = "darkred";
                let listText = document.getElementById(`${project}-list-text-${todo.id}`);
                listText.append(projectName);

                let checkbox = document.getElementById(`${project}-checkbox-${todo.id}`);
                checkbox.onclick = () => {
                    deleteTodoInProject(project, todo.id);
                    resetTodoList();
                    filterInbox();
                }
            })
        })

        const pageHeader = document.getElementById("page-header");
        pageHeader.textContent = "All Projects";

    }

    function filterToday() {
        todoListElement.innerHTML = "";
        const pageHeader = document.getElementById("page-header");
        pageHeader.textContent = "Today";

    }

    function filterWeek() {
        todoListElement.innerHTML = "";
        const pageHeader = document.getElementById("page-header");
        pageHeader.textContent = "Week";
    }
}

export {filtersList};
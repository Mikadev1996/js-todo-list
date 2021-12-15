import {createElement} from "./index.js";
import {todos} from "./create-todo";
import {projects} from "./create-todo";
import {todoListUi} from "./todo-list-ui";

let menuItems = ["Inbox", "Today", "Week"];

function filtersList() {
    const filtersListElement = document.getElementById("filters-list")

    menuItems.forEach((item) => {
        let menuListItem = createElement("li", `filter-${item.toLowerCase()}`, ["menu-item"], item);
        filtersListElement.append(menuListItem);
    })

    const inbox = document.getElementById("filter-inbox");
    const today = document.getElementById("filter-today");
    const week = document.getElementById("filter-week");

    inbox.onclick = () => filterInbox();
    today.onclick = () => filterToday();
    week.onclick = () => filterWeek();

    const todoListElement = document.getElementById("default");

    function filterInbox() {
        todoListElement.innerHTML = "";
        projects.forEach(project => {
            let test = todos[project].todos;

            test.forEach((todo) => {
                console.log(test, project, todo.title, todo.description, todo.date);
                todoListUi(project);
                let projectName = createElement("p", null, null, `Project: ${project}`);
                projectName.style.color = "darkred";
                let listText = document.getElementById(`${project}-list-text`);
                listText.append(projectName);
            })
        })

        const pageHeader = document.getElementById("page-header");
        pageHeader.textContent = "All Projects";

    }

    function filterToday() {
        todoListElement.innerHTML = "";

    }

    function filterWeek() {
        todoListElement.innerHTML = "";
    }
}

export {filtersList};
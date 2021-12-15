import {createElement} from "./index.js";
import {todos} from "./create-todo";
import {projects} from "./create-todo";

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
            })
        })
    }

    function filterToday() {
        todoListElement.innerHTML = "";

    }

    function filterWeek() {
        todoListElement.innerHTML = "";
    }
}

export {filtersList};
import {createElement} from "./index.js";

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

    function filterInbox() {
        console.log("inbox");
    }

    function filterToday() {
        console.log("today");

    }

    function filterWeek() {
        console.log("week")
    }
}

export {filtersList};
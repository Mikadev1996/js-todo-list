import {createElement} from "./index";

let menuItems = [
    {
        id: 1,
        menu: "Inbox",
    },
    {
        id: 2,
        menu: "Today",
    },
    {
        id: 3,
        menu: "Week",
    },
];

function filtersList() {
    const filtersListElement = document.getElementById("filters-list")

    menuItems.forEach((item) => {
        let menuListItem = createElement("li", null, ["menu-item"], item.menu);
        filtersListElement.append(menuListItem);
    })
}

export {filtersList};
import {createElement} from "./index";

let someArrayOfTodos = [
    {
        id: 1,
        todo: "Todo 1",
    },
    {
        id: 2,
        todo: "Todo 2",
    },
];

function mainPage() {
    const app = createElement("div", "app", null, null);

    function navBar() {
        const nav = createElement("nav", "top-bar", null, null);
        const titleDiv = createElement("div", "top-bar-content", null, "JavaScript");
        const title = createElement("strong", null, null, "Todo-list");

        titleDiv.append(title);
        nav.append(titleDiv);

        return nav;
    }

    function main() {
        const main = createElement("main", null, null, null);
        const leftMenuDiv = createElement("div", "left-menu", null, null);

    }


    app.append(navBar());

    return app;
}
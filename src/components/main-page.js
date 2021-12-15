import {createElement} from "./index";
import moment from "moment";

function mainPage() {
    const app = createElement("div", "app");

    function navBar() {
        const nav = createElement("nav", "top-bar");
        const titleDiv = createElement("div", "top-bar-content", null, "JavaScript");
        const title = createElement("strong", "", null, "Todo-list");

        titleDiv.append(title);
        nav.append(titleDiv);

        return nav;
    }

    function main() {
            const main = createElement("main");
            const contentWrapper = createElement("div", "content-wrapper");

            function leftMenu() {
                const leftMenuDiv = createElement("div", "left-menu");
                const listHolderDiv = createElement("div", "list-holder");
                const menuUnorderedList = createElement("ul", "filters-list", ["list"]);

                const projectUnorderedList = createElement("ul", "projects-list", ["list"]);

                listHolderDiv.append(menuUnorderedList, projectUnorderedList);
                leftMenuDiv.append(listHolderDiv);
                leftMenuDiv.append(listHolderDiv);

                return leftMenuDiv;
            }

            function editor() {
                const editorDiv = createElement("div", "editor");

                function viewHeader() {
                    const todayDate = moment().format('MMMM Do YYYY');

                    const viewHeaderDiv = createElement("div", "view-header");
                    const headerContent = createElement("div", "header-content");
                    const title = createElement("h1", null, ["headings"], "Today");
                    const date = createElement("p", null, ["headings"], todayDate);


                    headerContent.append(title, date);
                    viewHeaderDiv.append(headerContent);

                    return viewHeaderDiv;
                }

                function projectView() {
                    const todayViewDiv = createElement("div", "today-view");
                    const listsBox = createElement("div", "lists-box");
                    const listsDiv = createElement("div", "lists");
                    const listSection = createElement("div", "section-list");

                    const listCollection = createElement("ul", null, ["list-collection"]);

                    const defaultList = createElement("li", null, ["list"]);
                    const defaultListHeader = createElement("header", "page-header", ["todo-header", "todo"], " Todo List Group 1");
                    const todoUnorderedList = createElement("ul", "default", ["todo", "todo-list"]);

                    defaultList.append(defaultListHeader, todoUnorderedList);
                    listCollection.append(defaultList);
                    listSection.append(listCollection);
                    listsDiv.append(listSection);
                    listsBox.append(listsDiv);
                    todayViewDiv.append(listsBox);

                    return todayViewDiv;
                }

                editorDiv.append( viewHeader(), projectView());

                return editorDiv;
            }

            contentWrapper.append(leftMenu(), editor());
            main.append(contentWrapper);

            return main;
    }


    app.append(navBar(), main());
    return app;
}

export {mainPage};
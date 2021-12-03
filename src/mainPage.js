import {createElement} from "./index";

let menuItems = [
    {
        id: 1,
        menu: "Inbox",
    },
    {
        id: 2,
        menu: "Inbox",
    },
    {
      id: 3,
      menu: "Upcoming",
    },
];

let projects = [
    {
        id: 1,
        menu: "Default Project",
    },
    {
        id: 2,
        menu: "Example Project",
    }
]

let exampleTodos = [
    {
        id: 1,
        title: "Title",
        description: "First Todo",
        date: "Date DD/MM/YYYY",
        project: "Project",
    },
    {
        id: 2,
        title: "Title 2",
        description: "Second Todo",
        date: "Date DD/MM/YYYY",
        project: "Project",
    },
    {
        id: 3,
        title: "Title 3",
        description: "Third Todo",
        date: "Date DD/MM/YYYY",
        project: "Project",
    },
];




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
                const menuUnorderedList = createElement("ul", null, ["list"]);

                menuItems.forEach((item) => {
                    let menuListItem = createElement("li", null, ["menu-item"], item.menu);
                    menuUnorderedList.append(menuListItem);
                })

                const projectUnorderedList = createElement("ul", null, ["list"]);

                const projectHeader = createElement("header", null, ["menu-item", "bold"], "Projects");
                projectUnorderedList.append(projectHeader);

                projects.forEach((project) => {
                    let projectListItem = createElement("li", null, ["menu-item"], project.menu);
                    projectUnorderedList.append(projectListItem);
                })

                listHolderDiv.append(menuUnorderedList, projectUnorderedList)

                leftMenuDiv.append(listHolderDiv);
                leftMenuDiv.append(listHolderDiv);

                return leftMenuDiv;
            }

            function editor() {
                const editorDiv = createElement("div", "editor");

                function viewHeader() {
                    const viewHeaderDiv = createElement("div", "view-header");
                    const headerContent = createElement("div", "header-content");
                    const title = createElement("h1", null, null, "Today");
                    const date = createElement("p", null, null, "Date");

                    headerContent.append(title, date);
                    viewHeaderDiv.append(headerContent);

                    return viewHeaderDiv;
                }

                function todayView() {
                    const todayViewDiv = createElement("div", "today-view");
                    const listsBox = createElement("div", "lists-box");
                    const listsDiv = createElement("div", "lists");
                    const listSection = createElement("section", "section-list");

                    const listCollection = createElement("ul", null, ["list-collection"]);

                    const defaultList = createElement("li", null, ["list"]);
                    const defaultListHeader = createElement("header", null, ["todo-header", "todo"], "Todo List Group 1");
                    const todoUnorderedList = createElement("ul", null, ["todo", "todo-list"]);

                    exampleTodos.forEach((todo) => {
                        let todoListItem = createElement("li", todo.id, ["todo", "todo-item"], todo.description);
                        todoUnorderedList.append(todoListItem);
                    })

                    const addTodoBtnListItem = createElement("li", null, ["todo", "todo-btn"]);
                    const addTodoBtn = createElement("button", null, ["add-todo"], "+ Add Todo");

                    addTodoBtnListItem.append(addTodoBtn);
                    todoUnorderedList.append(addTodoBtnListItem);

                    defaultList.append(defaultListHeader, todoUnorderedList);
                    listCollection.append(defaultList);
                    listSection.append(listCollection);
                    listsDiv.append(listSection);
                    listsBox.append(listsDiv);
                    todayViewDiv.append(listsBox);


                    return todayViewDiv;
                }

                editorDiv.append(viewHeader(), todayView());

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
import {createElement} from "./index";
import {todos, confirmAddTodo} from "./create-todo";

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

let projects = [
    {
        id: 1,
        menu: "Default Project",
    },
]

function refreshTodos() {
    const todoUnorderedList = document.getElementById("default");
    todoUnorderedList.innerHTML = "";

    todos.forEach((todo) => {
        let todoListItem = createElement("li", todo.id, ["todo", "todo-item"], todo.title);
        let todoDescription = createElement("p", null, null, todo.description);
        todoListItem.append(todoDescription);
        todoUnorderedList.append(todoListItem);
    })

    const addTodoBtnListItem = createElement("li", "new-todo-list-item", ["todo", "todo-btn"]);
    const addTodoBtn = createElement("button", null, ["add-todo"], "+ Add Todo");
    addTodoBtnListItem.append(addTodoBtn);
    todoUnorderedList.append(addTodoBtnListItem);
    addTodoBtn.onclick = addTodoUI;

    addTodoBtnListItem.append(addTodoBtn);
    return addTodoBtnListItem;
}

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

                function projectView() {
                    const todayViewDiv = createElement("div", "today-view");
                    const listsBox = createElement("div", "lists-box");
                    const listsDiv = createElement("div", "lists");
                    const listSection = createElement("section", "section-list");

                    const listCollection = createElement("ul", null, ["list-collection"]);

                    const defaultList = createElement("li", null, ["list"]);
                    const defaultListHeader = createElement("header", null, ["todo-header", "todo"], "Todo List Group 1");
                    const todoUnorderedList = createElement("ul", "default", ["todo", "todo-list"]);


                    todos.forEach((todo) => {
                        let todoListItem = createElement("li", todo.id, ["todo", "todo-item"], todo.title);
                        let todoDescription = createElement("p", null, null, todo.description);
                        todoListItem.append(todoDescription);
                        todoUnorderedList.append(todoListItem);
                    })


                    const addTodoBtnListItem = createElement("li", "new-todo-list-item", ["todo", "todo-btn"]);
                    const addTodoBtn = createElement("button", null, ["add-todo"], "+ Add Todo");
                    addTodoBtn.onclick = addTodoUI

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

                editorDiv.append(viewHeader(), projectView());

                return editorDiv;
            }

            contentWrapper.append(leftMenu(), editor());
            main.append(contentWrapper);

            return main;
    }


    app.append(navBar(), main());
    return app;
}

function addTodoUI() {
    const newTodoListItem= document.getElementById("new-todo-list-item");

    function newTodo() {
        const newTodoDiv = createElement("div", null, ["new-todo"]);
        const inputSection = createElement("div", null, ["input-section"]);

        const titleSpan = createElement("span");
        const title = createElement("input", "default-title", ["inputs", "input-title"]);
        title.type = "text";
        title.placeholder = "eg., Get pastries sun at 9"
        titleSpan.append(title);

        const descSpan = createElement("span");
        const desc = createElement("input", "default-desc", ["inputs", "input-title"]);
        desc.type = "text";
        desc.placeholder = "Description";
        descSpan.append(desc);

        inputSection.append(titleSpan, descSpan);

        function options() {
            const optionsDiv = createElement("div", null, ["options"]);
            const confirmDiv = createElement("div");
            const confirmBtn = createElement("button", "default-confirm", ["option-btn", "confirm-add-todo"], "Add task");
            confirmDiv.append(confirmBtn)

            confirmBtn.addEventListener("click", () => {

                confirmAddTodo("default");
            })

            const cancelDiv = createElement("div");
            const cancelBtn = createElement("button", null, ["option-btn", "cancel-add-todo"], "Cancel");
            confirmDiv.append(cancelBtn)
            cancelBtn.onclick = refreshTodos;

            optionsDiv.append(confirmDiv, cancelDiv);

            return optionsDiv;
        }

        newTodoDiv.append(inputSection, options());

        return newTodoDiv;
    }

    newTodoListItem.innerHTML = "";
    newTodoListItem.append(newTodo());
}



export {mainPage, refreshTodos};
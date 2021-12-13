import {createElement} from "./index";
import {projects,todos, confirmAddTodo} from "./create-todo";
import {deleteTodo} from "./create-todo";
import {addTodoUI} from "./add-todo-ui";
import moment from "moment";



function refreshTodos(project) {
    const todoUnorderedList = document.getElementById("default");
    todoUnorderedList.innerHTML = "";

    const todoList = todos[project].todos;
    todoList.forEach((todo) => {
        let listItem = createElement("li", `list-${project}-${todo.id}`, ["todo", "todo-item"]);

        let listContentDiv = createElement("div", null, ["list-content"]);
        let checkboxDiv = createElement("div", null, ["checkbox-div"]);
        let checkBoxBtn = createElement("button", `checkbox-${todo.id}`, ["checkbox-btn"]);

        checkBoxBtn.onclick = () => {
            deleteTodo(project, todo.id);
        }

        let checkboxImage = createElement("img", null, ["checkbox"]);
        checkboxImage.src = "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-check-mark-circle-thin.png&r=242&g=242&b=242";
        checkBoxBtn.append(checkboxImage);
        checkboxDiv.append(checkBoxBtn);

        let todoTextDiv = createElement("div", null, ["list-text"], todo.title);
        let todoDescription = createElement("p", null, null, todo.description);
        let dateDisplayDiv = createElement("div", null, ["todo-date"], todo.date);
        todoTextDiv.append(todoDescription, dateDisplayDiv);

        listContentDiv.append(checkboxDiv, todoTextDiv);
        listItem.append(listContentDiv);
        todoUnorderedList.append(listItem);
    })
    const pageHeader = document.getElementById("page-header");
    pageHeader.textContent = `Project: ${project}`;

    const addTodoBtnListItem = createElement("li", "new-todo-list-item", ["todo", "todo-btn"]);
    const addTodoBtn = createElement("button", null, ["add-todo"], "+ Add Todo");
    addTodoBtnListItem.append(addTodoBtn);
    todoUnorderedList.append(addTodoBtnListItem);

    addTodoBtn.onclick = () => {
        addTodoUI(project);
    };

    addTodoBtnListItem.append(addTodoBtn);
    todoUnorderedList.append(addTodoBtnListItem);

    return todoUnorderedList;
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

export {mainPage, refreshTodos};
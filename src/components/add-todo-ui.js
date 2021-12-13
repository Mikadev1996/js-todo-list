import {createElement} from "./index";
import {confirmAddTodo} from "./create-todo";
import {refreshTodos} from "./main-page";

function addTodoUI(project) {
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

        const calenderDiv = createElement("div", null, ["calendar-div"]);
        const calendar = createElement("input", `${project}-calendar`, ["calendar"]);
        calendar.type = "date";


        calenderDiv.append(calendar);
        inputSection.append(titleSpan, descSpan, calenderDiv);

        function options() {
            const optionsDiv = createElement("div", null, ["options"]);
            const confirmDiv = createElement("div");
            const confirmBtn = createElement("button", "default-confirm", ["option-btn", "add-todo"], "Confirm Task");
            confirmDiv.append(confirmBtn)

            confirmBtn.addEventListener("click", () => {
                confirmAddTodo(project);
            })

            const cancelDiv = createElement("div");
            const cancelBtn = createElement("button", null, ["option-btn", "cancel-add-todo"], "Cancel");
            confirmDiv.append(cancelBtn)
            cancelBtn.onclick = () => {
                refreshTodos(project);
            }

            optionsDiv.append(confirmDiv, cancelDiv);

            return optionsDiv;
        }

        newTodoDiv.append(inputSection, options());

        return newTodoDiv;
    }
    newTodoListItem.innerHTML = "";
    newTodoListItem.append(newTodo());
}

export {addTodoUI};
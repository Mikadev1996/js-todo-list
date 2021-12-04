import {createElement} from "./index";

class Todo {
    constructor(title, description, date, project) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.project = project;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value.length === 0) {
            console.log("Please insert title");
        }
        this._title = value;
    }
}

let todos = [
    {
      id: 1,
      title: "Title",
      description: "First Todo",
      date: "Date DD/MM/YYYY",
      project: "Project",
    },
];


function test() {
    let addTodo = document.querySelectorAll(".add-todo");
    addTodo.forEach((btn) => {
        btn.onclick = handleAddTodo;

    })
}

function handleAddTodo(input) {
    console.log("Add todo clicked +", input.target);
    updateAddTodoUI();
}


function updateAddTodoUI() {
    const newTodoListItem= document.getElementById("new-todo-list-item");

    function newTodo() {
        const newTodoDiv = createElement("div", null, ["new-todo"]);
        const inputSection = createElement("div", null, ["input-section"]);

        const titleSpan = createElement("span");
        const title = createElement("input", null, ["inputs", "input-title"]);
        title.type = "text";
        title.placeholder = "eg., Get pastries sun at 9"
        titleSpan.append(title);

        const descSpan = createElement("span");
        const desc = createElement("input", null, ["inputs", "input-title"]);
        desc.type = "text";
        desc.placeholder = "Description";
        descSpan.append(desc);

        inputSection.append(titleSpan, descSpan);

        function options() {
            const optionsDiv = createElement("div", null, ["options"]);
            const confirmDiv = createElement("div");
            const confirmBtn = createElement("button", null, ["option-btn", "confirm-add-todo"], "Add task");
            confirmDiv.append(confirmBtn)

            const cancelDiv = createElement("div");
            const cancelBtn = createElement("button", null, ["option-btn", "cancel-add-todo"], "Cancel");
            confirmDiv.append(cancelBtn)

            optionsDiv.append(confirmDiv, cancelDiv);

            return optionsDiv;
        }

        newTodoDiv.append(inputSection, options());

        return newTodoDiv;
    }

    newTodoListItem.innerHTML = "";
    newTodoListItem.append(newTodo());
}


export {test};
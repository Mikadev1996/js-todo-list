import {refreshTodos} from "./mainPage";
import { compareAsc, format} from "date-fns";

const todoFactory = (id, project, title, description, date)  => {
    return {id, project, title, description, date}
};

let todos2 = {
    default: {
        todos: [
            {
                id: 0,
                title: "Title",
                description: "First Todo",
                date: "Date DD/MM/YYYY",
            },

        ]
    }
};

//
// let todos = [
//     {
//         project: "default",
//         projectTodos: [
//             {
//                 id: 0,
//                 title: "Title",
//                 description: "First Todo",
//                 date: "Date DD/MM/YYYY",
//             },
//         ],
//
//     },
//     {
//         project: "test",
//         projectInfo: [
//
//         ],
//     }
// ];

let todos = [
    {
        project: "default",
        id: 0,
        title: "Title",
        description: "First Todo",
        date: "Date DD/MM/YYYY",
    },
]


function confirmAddTodo(project) {
    const titleText = document.getElementById("default-title").value;
    const descText = document.getElementById("default-desc").value;
    const newTodo = todoFactory(todos.length ,project, titleText, descText, new Date());
    console.log(newTodo);
    if (titleText.length === 0) {
        window.alert("Please insert a title");
    } else {
        // for (let i = 0; i < todos.length; i ++) {
        //     if (todos[i].project === project) {
        //         todos[i].projectTodos.push(newTodo);
        //     }
    // }

        todos.push(newTodo)
        refreshTodos(project);
    }
}

function deleteTodo(project, id) {
    console.log(todos[id]);
    // for (let i = 0; i < todos.length; i++) {
    //     if (todos[i].project === project) {
    //         if (todos[i].id === id) {
    //             todos.splice(i, 1);
    //             break;
    //         }
    //     }
    // }
    for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos.splice(i, 1);
                break;
        }
    }
    refreshTodos(project);
}



export {confirmAddTodo, todos, deleteTodo};


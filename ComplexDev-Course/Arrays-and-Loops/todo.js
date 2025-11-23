const todoList = [
  { name: "make dinner", date: "2023-10-01" },
  { name: "wash dishes", date: "2023-10-02" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const html = `
     <div>${todoObject.name}</div>
      <div>${todoObject.date}</div>
      <button onclick="
      todoList.splice(${index}, 1); 
      renderTodoList();"
      class="delete-btn">Delete</button>
     `;

    todoListHTML += html;
  });

  document.querySelector(".container").innerHTML = todoListHTML;
}

document.querySelector('.add-btn').addEventListener('click', () => {

})

function addTodo() {
  const inputElement = document.querySelector(".todo-input");

  const todoName = inputElement.value;

  const dateInputElement = document.querySelector(".todo-date");
  const dueDate = dateInputElement.value;

  // Don't add empty todos
  if (!todoName || todoName.trim() === "") {
    inputElement.value = "";
    return;
  }

  // Clear inputs immediately so the user sees the action
  inputElement.value = "";
  dateInputElement.value = "";

  // Wait 2 seconds before adding the todo to the list and rendering
  setTimeout(() => {
    todoList.push({ name: todoName, date: dueDate });
    renderTodoList();
  }, 2000);
}

// // This code manages a simple todo list application.
// const todoList = [
//   { name: "make dinner", date: "2023-10-01" },
//   { name: "wash dishes", date: "2023-10-02" },
// ];

// renderTodoList();

// function renderTodoList() {
//   let todoListHTML = "";

//   for (let i = 0; i < todoList.length; i++) {
//     const todoObject = todoList[i];

//     const { name, dueDate } = todoObject;

//     const html = `
//     <div>${name}</div>
//     <div>${dueDate}</div>
//     <button onclick="
//       todoList.splice(${i}, 1);
//       renderTodoList();
//     ">Delete</button>
//     `;
//     todoListHTML += html;
//   }

//   document.querySelector(".container").innerHTML = todoListHTML;
// }

// function addTodo() {
//   const inputElement = document.querySelector(".todo-input");
//   const name = inputElement.value;

//   const dateInputElement = document.querySelector('.todo-date');
//   const dueDate = dateInputElement.value;

//   todoList.push({ name, dueDate });

//   inputElement.value = "";

//   renderTodoList();
// }

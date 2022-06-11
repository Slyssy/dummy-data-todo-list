let arrayOfTodos;
let arrayData;

let incompleteTasks = document.querySelector('#incomplete-todos').value;
console.log(incompleteTasks);
let completedTasks = document.querySelector('#complete-todos').value;
const radioButtons = document.querySelectorAll('input[name=todos-status]');
console.log(radioButtons);

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => (arrayOfTodos = data));
};

const logTodos = () => {
  console.log(arrayOfTodos);
};

const populateTodos = (element) => {
  //% Selecting elements
  const form = document.querySelector('#todo-list');
  const inputs = form.querySelectorAll('.checkbox-container');
  // console.log(inputs);
  form.classList.add('hide');
  //% Looping through the list itmes and clearing them each time the function
  //% is called.
  inputs.forEach((input) => input.parentNode.removeChild(input));
  // console.log(lis);

  //% Grabbing the button id and grabbing the last two digits
  const user = +element.id.slice(5);
  // console.log(user);

  //% Creating an array by filter it by the User ID.
  const filterTodos = arrayOfTodos.filter((todo) => todo.userId === user);

  //% Create a conditional statement to select which array we are going to map.
  if (user === 00) {
    arrayData = arrayOfTodos;
  } else arrayData = filterTodos;

  let todoStatus;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      todoStatus = radioButton.value;
      break;
    }
  }
  console.log(todoStatus);

  const incompleteTodos = arrayData.filter((todo) => todo.completed === false);
  const completeTodos = arrayData.filter((todo) => todo.completed === true);
  const allTodos = arrayData;

  if (todoStatus === 'all') {
    arrayData = allTodos;
  }
  if (todoStatus === 'incomplete') {
    arrayData = incompleteTodos;
  }
  if (todoStatus === 'complete') {
    arrayData = completeTodos;
  }

  //% Using the map method to to grab each object from the array of objects, and
  //% setting variables for object values.
  arrayData.forEach((todo) => {
    const userID = todo.userId;
    const todoID = todo.id;
    const toDoTitle = todo.title;
    const taskComplete = todo.completed;

    //% Creating a new list element and populating the li's with the data from above.
    const todoList = document.querySelector('#todo-list');
    todoList.insertAdjacentHTML(
      'afterbegin',
      `
      <div class="checkbox-container hide">
    <input type="checkbox" name="todo-item" value="todo" ${
      taskComplete ? 'checked' : ''
    }>
    <label for-"todo-item">${toDoTitle}</label><br>
    </div>
    `
    );

    const inputContainer = document.querySelector('.checkbox-container');
    form.classList.remove('hide');
    inputContainer.classList.remove('hide');
  });
};

// incompleteTasks.addEventListener(onchange, (data) => {
//   data.filter((obj) => {
//     obj.completed = incompleteTasks.value;
//   });
// });
//% Calling fetchTodos function when the page loads.
window.onload = fetchTodos();

const checkStatus = (array) => {
  array.filter((todo) => todo.completed === false);
};

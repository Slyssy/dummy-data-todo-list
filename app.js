let arrayOfTodos;
let arrayData;
let todoStatus;

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

  //% Grabbing the button id and grabbing the last two digits
  const user = +element.id.slice(5);

  //% Creating an array by filter it by the User ID.
  const filterTodos = arrayOfTodos.filter((todo) => todo.userId === user);

  //% Create a conditional statement to select which array we are going to map.
  if (user === 00) {
    arrayData = arrayOfTodos;
  } else arrayData = filterTodos;

  //% Watching the radio buttons to update the status of the the todoStatus
  //% variable based on which radio button is selected.

  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      todoStatus = radioButton.value;
      break;
    }
  }

  //% Setting variables for different array data so I can use them later.
  const incompleteTodos = arrayData.filter((todo) => todo.completed === false);
  const completeTodos = arrayData.filter((todo) => todo.completed === true);
  const allTodos = arrayData;

  //% Logic to select which array data I will use when populateTodos() is
  //% called.
  if (todoStatus === 'all') {
    arrayData = allTodos;
  }
  if (todoStatus === 'incomplete') {
    arrayData = incompleteTodos;
  }
  if (todoStatus === 'complete') {
    arrayData = completeTodos;
  }

  //% Using the forEach method to to grab each object from the array of
  //% objects, and setting variables for object values.
  arrayData.forEach((todo) => {
    const toDoTitle = todo.title;
    const taskComplete = todo.completed;

    //% Creating a new list element and populating the li's with the data from
    //% above.
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

    //% The logic below will remove the hide class allowing the checkboxes to be
    //% displayed.
    const inputContainer = document.querySelector('.checkbox-container');
    form.classList.remove('hide');
    inputContainer.classList.remove('hide');
  });
};

//% Calling fetchTodos function when the page loads.
window.onload = fetchTodos();

let arrayOfTodos;
let arrayData;
let filteredUsers;
let completedTask;
let incompleteTask;
let todoList = document.querySelector('#todo-list');

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
  console.log(user);
  const taskStatus = element.className;
  console.log(taskStatus);

  let arrayOfTodosCopy = Array.from(arrayOfTodos);
  if (taskStatus === 'complete') {
    arrayOfTodosCopy.filter((todo) => {
      todo.completed = true;
    });
  } else if (taskStatus === 'incomplete') {
    arrayOfTodosCopy.filter((todo) => {
      todo.completed = false;
    });
  }

  if (taskStatus === 'all-tasks') {
    arrayOfTodos;
  }

  //% Creating an array by filtering it by the User ID.
  filteredUsers = arrayOfTodos.filter((todo) => todo.userId === user);

  //% Create a conditional statement to select which array we are going to map.
  if (user === 00) {
    arrayData = arrayOfTodos;
  } else if (user !== 0) {
    arrayData = filteredUsers;
  }
  console.log(arrayData);

  //%Filtering array data by completed status.
  completedTask = arrayData.filter((todo) => todo.completed === true);
  incompleteTask = arrayData.filter((todo) => todo.completed === false);

  //% Using the map method to to grab each object from the array of objects, and
  //% setting variables for object values.
  arrayData.map((todo) => {
    const toDoTitle = todo.title;
    const taskComplete = todo.completed;

    //% Creating a new list element and populating the li's with the data from above.

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

// const filterCompletedTasks = (event) => {
//   completedTask = arrayData.filter((todo) => {
//     todo.completed === true;
//     arrayData = completedTask;
//     arrayData.map((todo) => {
//       const userID = todo.userId;
//       const todoID = todo.id;
//       const toDoTitle = todo.title;
//       const taskComplete = todo.completed;

//       //% Creating a new list element and populating the li's with the data from above.

//       todoList.insertAdjacentHTML(
//         'afterbegin',
//         `
//         <div class="checkbox-container hide">
//       <input type="checkbox" name="todo-item" value="todo" ${
//         taskComplete ? 'checked' : ''
//       }>
//       <label for-"todo-item">${toDoTitle}</label><br>
//       </div>
//       `
//       );
//     });
//   });
//   console.log(arrayData);
// };
//% Calling fetchTodos function when the page loads.
window.onload = fetchTodos();

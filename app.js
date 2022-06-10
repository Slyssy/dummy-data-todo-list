let arrayOfTodos = [
  {
    userId: 14,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: 'delectus aut autem',
    completed: false,
  },
];

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

  //% Creating an array by filter it by the User ID.
  const filterTodos = arrayOfTodos.filter((todo) => todo.userId === user);

  //% Create a conditional statement to select which array we are going to map.
  let arrayData;
  if (user === 00) {
    arrayData = arrayOfTodos;
  } else arrayData = filterTodos;

  //% Using the map method to to grab each object from the array of objects, and
  //% setting variables for object values.
  let toDo = arrayData.map((todo) => {
    const userID = todo.userId;
    const todoID = todo.id;
    const toDoTitle = todo.title;
    const taskComplete = todo.completed;

    //% Creating a new list element and populating the li's with the data from above.
    // const listItem = document.createElement('li');
    // listItem.innerHTML = `${toDoTitle}`;
    // ol.appendChild(listItem);

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

//% Calling fetchTodos function when the page loads.
window.onload = fetchTodos();

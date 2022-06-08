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
  const user = +element.id.slice(5);
  console.log(user);
  const filterTodos = arrayOfTodos.filter((todo) => todo.userId === user);

  let toDo = filterTodos.map((todo) => {
    const userID = todo.userId;
    const todoID = todo.id;
    const toDoTitle = todo.title;
    const taskComplete = todo.completed;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${toDoTitle}`;
    document.querySelector('#todo-list').appendChild(listItem);
    taskCompleted(taskComplete, listItem);
  });
};

const taskCompleted = (item, element) => {
  if (item === true) {
    element.style.setProperty('text-decoration', 'line-through');
    element.style.color = 'red';
  }
};

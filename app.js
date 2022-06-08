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

const populateTodos = () => {
  let toDo = arrayOfTodos.map((todo) => {
    const userID = todo.userId;
    const todoID = todo.id;
    const toDoTitle = todo.title;
    const taskComplete = todo.completed;

    const listItem = document.createElement('li');
    listItem.innerHTML = `${toDoTitle}`;
    document.querySelector('#todo-list').appendChild(listItem);
  });
};

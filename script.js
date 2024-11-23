const addButton = document.querySelector('.add-btn');
const todoInput = document.querySelector('.todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const task = todoInput.value.trim();

  if (task) {
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', () => {
      listItem.remove();
    });

    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    todoInput.value = '';
  }
});
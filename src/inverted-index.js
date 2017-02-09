const app = angular.module('todoApp', []);
app.controller('TodoListController', () => {
  const todoList = this;
  todoList.todos = [
      { text: 'learn AngularJS', done: true },
      { text: 'build an AngularJS app', done: false }];

  todoList.addTodo = () => {
    todoList.todos.push({ text: todoList.todoText, done: false });
    todoList.todoText = '';
  };

  todoList.remaining = () => {
    let count = 0;
    angular.forEach(todoList.todos, (todo) => {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.archive = () => {
    const oldTodos = todoList.todos;
    todoList.todos = [];
    angular.forEach(oldTodos, (todo) => {
      if (!todo.done) todoList.todos.push(todo);
    });
  };
});

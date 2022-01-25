import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    console.log(text);
    setTodos((prevTodos) => {
      return [{ id: Math.random().toString(), text: text }, ...prevTodos];
    });
  };

  const todoRemoveHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div className="App">
      {/* A component that adds todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onRemoveTodo={todoRemoveHandler} />
    </div>
  );
};

export default App;

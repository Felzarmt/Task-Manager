import React, { useState } from 'react';
import './Components/App.css';
import TodoInput from './Components/ToDoInput';
import TodoList from './Components/ToDoList';
import TodoFooter from './Components/ToDoFooter';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { title: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const hasTodos = todos.length > 0;

  return (
    <div className="app">
      <div className="header">
        <h1>My Day</h1>
        <p>All my tasks in one place</p>
      </div>
      <TodoInput newTodo={newTodo} setNewTodo={setNewTodo} handleAddTodo={handleAddTodo} />

      <div id="main" style={{ display: hasTodos ? 'block' : 'none' }}>
        <TodoList filteredTodos={filteredTodos} toggleTodo={toggleTodo} handleDelete={handleDelete} />
      </div>

      <div id="footer" style={{ display: hasTodos ? 'block' : 'none' }}>
        <TodoFooter todos={todos} filter={filter} setFilter={setFilter} handleClearCompleted={handleClearCompleted} />
      </div>
    </div>
  );
};

export default App;
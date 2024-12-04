import React from 'react';

const TodoInput = ({ newTodo, setNewTodo, handleAddTodo }) => {
  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Type new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        autoFocus
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
import React from 'react';

const TodoFooter = ({ todos, filter, setFilter, handleClearCompleted }) => {
  return (
    <div className="todo-footer">
      <span>{todos.filter(todo => !todo.completed).length} item left</span>
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>
      <button onClick={handleClearCompleted}>Clear completed</button>
    </div>
  );
};

export default TodoFooter;

import React, { useState } from 'react';

const TodoList = ({ filteredTodos, toggleTodo, handleDelete }) => {
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedTitle, setEditedTitle] = useState('');

  const handleDoubleClick = (index, title) => {
    setEditingIndex(index);
    setEditedTitle(title);
  };

  const handleSaveEdit = (index) => {
    if (editedTitle.trim()) {
      handleDelete(index, editedTitle); 
    }
    setEditingIndex(-1);
    setEditedTitle('');
  };

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo, index) => (
        <li
          key={index}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
          onMouseEnter={() => setEditingIndex(index)} 
          onMouseLeave={() => setEditingIndex(-1)} 
        >
          <span onClick={() => toggleTodo(index)} className="checkbox">
            {todo.completed ? '✔️' : '⭕'}
          </span>

          {editingIndex === index ? (
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              onBlur={() => handleSaveEdit(index)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSaveEdit(index);
                } else if (e.key === 'Escape') {
                  setEditingIndex(-1);
                  setEditedTitle('');
                }
              }}
              autoFocus
            />
          ) : (
            <span
              className="todo-text"
              onDoubleClick={() => handleDoubleClick(index, todo.title)}
            >
              {todo.title}
            </span>
          )}

          {editingIndex === index && (
            <button className="destroy" onClick={() => handleDelete(index)}>
              🗑️
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
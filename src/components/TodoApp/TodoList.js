import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick }) => (
  <div className="mdl-cell mdl-cell--12-col">
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;

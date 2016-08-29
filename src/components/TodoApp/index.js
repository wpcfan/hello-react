import React, { PropTypes } from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const TodoApp = () => (
  <div className="mdl-grid">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

TodoApp.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default TodoApp;

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div className="mdl-cell mdl-cell--12-col">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="input-addTodo" ref={node => { input = node; }} />
          <label className="mdl-textfield__label" htmlFor="input-addTodo">Type todo here...</label>
        </div>

        <button type="submit" className="mdl-button mdl-js-button mdl-button--primary">
          Add Todo
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);

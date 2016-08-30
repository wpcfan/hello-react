import React, { PropTypes } from 'react';

const Login = ({ onClick, username, password }) => (
  <div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="text" id="username" />
      <label class="mdl-textfield__label" htmlFor="username">Text...</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" type="password" id="password" />
      <label class="mdl-textfield__label" htmlFor="password">Text...</label>
    </div>
    <button type="submit" className="mdl-button mdl-js-button mdl-button--primary">
      Login
    </button>
    <a href="#" className="mdl-button mdl-js-button mdl-button--primary" onClick={e=>{
      e.preventDefault();
    }}>
      Register
    </a>
  </div>
);

export default Login;

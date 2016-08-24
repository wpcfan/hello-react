import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div className="mdl-cell mdl-cell--12-col">
    Show:
    {" "}
    <FilterLink filter="all">
      All
    </FilterLink>
    <FilterLink filter="active">
      Active
    </FilterLink>
    <FilterLink filter="completed">
      Completed
    </FilterLink>
  </div>
);

export default Footer;

import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => (
  <div className="mdl-cell mdl-cell--12-col">
    显示:
    {" "}
    <FilterLink filter="all">
      全部
    </FilterLink>
    <FilterLink filter="active">
      活动
    </FilterLink>
    <FilterLink filter="completed">
      完成
    </FilterLink>
  </div>
);

export default Footer;

import React from 'react';
import FilterLink from './FilterLink';

const Footer = ({ visibilityFilter, onFilterClick }) => (
  <p>
    Show:{' '}
    <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}>
      completed
    </FilterLink>
  </p>
);

export default Footer;

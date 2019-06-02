import React from '../../../node_modules/react';
import PropTypes from '../../../node_modules/prop-types';
import Pet from '../PetsListItem/PetsListItem';

const Pets = ({ items }) => (
  <ul>
    {items.length !== 0 &&
      items.map(item => (
        <li key={item.id}>
          <Pet {...item} />
        </li>
      ))}
  </ul>
);

Pets.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ).isRequired,
};

export default Pets;

import React from '../../../node_modules/react';
import { Link, withRouter } from '../../../node_modules/react-router-dom';
import PropTypes from '../../../node_modules/prop-types';

const Pet = ({ id, name, image, match }) => (
  <Link to={`${match.path}/${id}`}>
    <p>{name}</p>
    <img src={image} alt="pet" />
  </Link>
);

Pet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  match: PropTypes.objectOf.isRequired,
};

export default withRouter(Pet);

import React from '../../../node_modules/react';
import PropTypes from '../../../node_modules/prop-types';

const PetProfile = ({
  name,
  image,
  age,
  gender,
  color,
  breed,
  description,
  onBack,
}) => (
  <>
    <button type="button" onClick={onBack}>
      <i className="material-icons">keyboard_backspace</i>Return
    </button>
    <p>All about {name}</p>
    <div>
      <img src={image} alt="Pet" />
      <div>
        <p>Age:{age}</p>
        <p>Gender:{gender}</p>
        <p>Color:{color}</p>
        <p>Breed:{breed}</p>
      </div>
    </div>
    <p>{description}</p>
  </>
);

PetProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default PetProfile;

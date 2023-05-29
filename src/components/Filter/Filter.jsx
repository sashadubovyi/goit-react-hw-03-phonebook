import React from 'react';
import PropTypes from 'prop-types';
import { InputName } from './Filter.styled';

const FilterInput = ({ filter, handleFilterChange }) => {
  return (
    <>
      <InputName
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Find contact by name"
      ></InputName>
    </>
  );
};

FilterInput.propType = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterInput;

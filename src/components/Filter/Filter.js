import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import st from './Filter.module.css';
import { filterContacts } from 'redux/FilterSlice';

const FilterField = () => {
  const dispatch = useDispatch();

  function changeFilter(evt) {
    const value = evt.currentTarget.value;
    dispatch(filterContacts(value));
  }

  return (
    <div className={st.filter}>
      <label>Find contacts by name </label>
      <input type="text" onChange={changeFilter} />
    </div>
  );
};

FilterField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FilterField;

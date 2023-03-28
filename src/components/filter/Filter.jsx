import PropTypes from 'prop-types';
import { CiSearch } from 'react-icons/ci';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.container}>
      <label htmlFor="filter" className={css.label}>
        <CiSearch className={css.searchIcon} /> Find contacts by name
      </label>
      <input
        id="filter"
        className={css.input}
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

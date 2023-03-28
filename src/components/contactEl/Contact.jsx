import PropTypes from 'prop-types';
import { CiUser, CiSquareRemove } from 'react-icons/ci';
import css from './Contact.module.css';
export const Contact = ({ currentId, name, number, deleteContact }) => {
  return (
    <div className={css.contact}>
      <h3 className={css.name}>
        <CiUser /> {name}
      </h3>
      <p className={css.number}>{number}</p>
      <CiSquareRemove
        className={css.close}
        onClick={() => deleteContact(currentId)}
      />
    </div>
  );
};

Contact.prototype = {
  currentId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

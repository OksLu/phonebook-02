import PropTypes from 'prop-types';
import { Contact } from 'components/contactEl/Contact';

import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.item}>
            <Contact
              currentId={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

import css from "../ContactList/ContactList.module.css"
import Contact from "../Contact/Contact";

function ContactList({ list, onDeleteContact }) {
  return (
    <ul className={css.contactsBox}>
      {list.map((contact) => (
        <li key={contact.id} className={css.contactsList}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={() => onDeleteContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;


import Contact from "../Contact/Contact";

function ContactList({ list, onDeleteContact }) {
  return (
    <ul>
      {list.map((contact) => (
        <li key={contact.id}>
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

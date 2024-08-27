
import css from "../Contact/Contact.module.css";

function Contact({ name, number, onDelete }) {
  return (
    <div className={css.card}>
      <p>👤{name}</p>
      <p>📞{number}</p>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;

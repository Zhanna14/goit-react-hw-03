
import css from "../Contact/Contact.module.css";

function Contact({ name, number, onDelete }) {
  return (
    <div className={css.card}>
      <div className={css.userCard}>
        <p className={css.name}>👤{name}</p>
        <p className={css.number}>📞{number}</p>
      </div>

      <button type="button" onClick={onDelete} className={css.deleteBtn}>
        Delete
      </button>
    </div>
  );
}

export default Contact;

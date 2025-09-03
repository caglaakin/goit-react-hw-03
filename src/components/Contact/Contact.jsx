import { FaPhone, FaUser } from "react-icons/fa6";
import css from "./Contact.module.css";

export default function Contact({contact: {id, name, number}, onDelete}) {
  return (
    <div className={css.contact}>
      <div className={css.contactInfo}>
        <div className={css.contactName}>
          <FaUser />
          <p>{name}</p>
        </div>
        <div className={css.contactNumber}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

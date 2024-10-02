import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contactsData.map((contact) => (
        <li key={contact.id}>
          <Contact contactData={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList

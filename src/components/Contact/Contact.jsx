import s from "./Contact.module.css"
import { FaPhoneSquare } from "react-icons/fa"
import { IoPersonCircle } from "react-icons/io5"

const Contact = ({ contactData: { name, number, id }, onDelete }) => {
  return (
    <div className={s.contactBox}>
      <div className={s.infoBox}>
        <p className={s.contactName}>
          <IoPersonCircle className={s.contactIcon} size="25" /> {name}
        </p>
        <p>
          <FaPhoneSquare className={s.contactIcon} size="25" /> {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}

export default Contact

import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import s from "./App.module.css"

import contactsData from "../../jsonData/contactsData.json"
import { useState, useEffect } from "react"

function App() {
  // Початкова ініціалізація
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("Contacts list")
    return savedContacts ? JSON.parse(savedContacts) : contactsData
  })

  // Стан для відстеження форми фільтрації
  const [filterContact, setFilterContact] = useState("")

  // Додавання до локального сховища
  useEffect(() => {
    window.localStorage.setItem("Contacts list", JSON.stringify(contacts))
  }, [contacts])

  // Додавання контакту
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact]
    })
  }

  // Видалення контакту
  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId)
    })
  }

  //Змінна для фільтрації (пошук елемента)
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContact.toLowerCase())
  )

  return (
    <div className="container">
      <h1 className={s.pbTitle}>PhoneBook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterContact} onFilter={setFilterContact} />
      <ContactList contactsData={visibleContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App

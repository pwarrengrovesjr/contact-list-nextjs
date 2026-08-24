"use client"

import { formatPhoneNumber } from "react-phone-number-input";
import { ContactsAPI } from "../contacts/data/contactsAPI";
import { useEffect, useState } from "react";

export default function SearchResults({ term }) {
  const [allContacts, _] = useState(ContactsAPI.all());
  const [results, setResults] = useState([])

  useEffect(() => {
    const searchNames = Object.groupBy(allContacts, ({ name }) => name.toLowerCase().includes(term.toLowerCase()) === true);
    const searchPhones = Object.groupBy(allContacts, ({ phone }) => phone.toLowerCase().includes(term.toLowerCase()) === true);
    const searchEmails = Object.groupBy(allContacts, ({ email }) => email.toLowerCase().includes(term.toLowerCase()) === true);

    console.log(Object.hasOwn(searchNames, 'true'));

    if (Object.hasOwn(searchNames, 'true')) {
      setResults(searchNames[true]);
    } else if (Object.hasOwn(searchPhones, 'true')) {
      setResults(searchPhones[true]);
    } else if (Object.hasOwn(searchEmails, 'true')) {
      setResults(searchEmails[true]);
    } else {
      setResults([
        {
          id: null,
          photo: "https://www.clipartmax.com/png/middle/440-4405730_contact-us-personal-icon-png.png",
          name: "No contacts Found!",
          phone: null,
          email: null
        }
      ])
    }
  }, [term])

  

    return (results.map((c) => (
      <tr className="" key={c.id}>
        <td onClick={() => router.push(`/contacts/${c.id}`)}>
          <img
            src={c.photo}
            alt=""
            width={75}
            height={75}
            className="img-thumbnail"
          />
        </td>
        <td onClick={() => router.push(`/contacts/${c.id}`)}>
          {c.name}
        </td>
        <td onClick={() => router.push(`/contacts/${c.id}`)}>
          {c.email}
        </td>
        <td onClick={() => router.push(`/contacts/${c.id}`)}>
          {formatPhoneNumber(c.phone)}
        </td>
        <td>
          <div className="col">
            <div className="btn-group-vertical row d-inline-flex">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => router.push(`/contacts/edit/${c.id}`)}
              >
                Edit
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  allContacts.splice(allContacts.indexOf(c), 1);
                  router.push("/.");
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    )))

  }
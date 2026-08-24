"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ContactsAPI } from "../contacts/data/contactsAPI";
import { formatPhoneNumber } from "react-phone-number-input";

export default function ContactList () {
  const [allContacts, _] = useState(ContactsAPI.all());
  const router = useRouter();

  allContacts.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return (allContacts.map((c) => (
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
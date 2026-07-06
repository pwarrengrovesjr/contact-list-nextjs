"use client";
import { useState } from "react";
import { ContactsAPI } from "@/app/contacts/data/contactsAPI";
import { formatPhoneNumber } from "react-phone-number-input";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const [allContacts, _] = useState(ContactsAPI.all());
  const router = useRouter();

  return (
    <div className="container text-center">
      <div className="row pt-5">
        <div className="col">
          <h1>My Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a
            className="btn btn-primary"
            role="button"
            onClick={() => router.push("/contacts/new")}
          >
            ADD CONTACT
          </a>
        </div>
      </div>
      <div className="row p-5">
        <div className="col">
          <input className="form-control" placeholder="Search Contacts" type="search"></input>
        </div>
      </div>
      <div className="row p-5">
        <div className="col table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead>
              <tr>
                <th scope="col" className="col-1">
                  Photo
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col" className="col-1">
                  Tools
                </th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((c) => (
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

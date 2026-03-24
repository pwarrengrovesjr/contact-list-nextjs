'use client'
import { useState } from "react";
import { ContactsAPI } from "../data/contactsAPI";
import Image from "next/image";
import { formatPhoneNumber } from "react-phone-number-input";

export default function Contacts () {
  const [allContacts, _] = useState(ContactsAPI.all());

  return (
    <div className="contiainer text-center ">
      <div className="row pt-5">
        <div className="col">
          <h1>All Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a className="btn btn-primary" href="./contacts/new" role="button">ADD CONTACT</a>
        </div>
      </div>
      <div className="row p-5">
        <div className="col">
          <input className="form-control" placeholder="Search Contacts" type="search"></input>
        </div>
      </div>
      <div className="row p-5">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="col-1">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col" className="col-1"></th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((c) => (
                <tr className="" key={c.id}>
                  <td><Image src={c.photo} alt="" width={75} height={75} className="img-thumbnail"/></td>
                  <td>{c.name}</td>
                  <td>{c.email}</td>
                  <td>{formatPhoneNumber(c.phone)}</td>
                  <td>
                    <div className="col">
                      <div className="row mb-2"><a href="">edit</a></div>
                      <div className="row"><a href="">delete</a></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
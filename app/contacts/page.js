'use client'
import { useState } from "react";
import { ContactsAPI } from "../data/contactsAPI";
import { formatPhoneNumber } from "react-phone-number-input";
import { useRouter } from "next/navigation";
import { func } from "prop-types";

export default function Contacts () {
  const [allContacts, _] = useState(ContactsAPI.all());
  const router = useRouter();
  
 
  return (
    <div className="container text-center">
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col">
          <h1>My Contacts</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a className="btn btn-primary" role="button" onClick={() => router.push('/contacts/new')}>ADD CONTACT</a>
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
                <th scope="col" className="col-1">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col" className="col-1">Tools</th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((c) => (
                <tr className="" key={c.id}>
                  <td onClick={() => router.push(`/contacts/${c.id}`)}><img src={c.photo} alt="" width={75} height={75} className="img-thumbnail" /></td>
                  <td onClick={() => router.push(`/contacts/${c.id}`)}>{c.name}</td>
                  <td onClick={() => router.push(`/contacts/${c.id}`)}>{c.email}</td>
                  <td onClick={() => router.push(`/contacts/${c.id}`)}>{formatPhoneNumber(c.phone)}</td>
                  <td>
                    <div className="col">
                      <div className="btn-group-vertical row d-inline-flex">
                        <button type="button"
                        className="btn btn-outline-primary"
                        onClick={() => router.push(`/contacts/edit/${c.id}`)}>
                          Edit
                        </button>
                        <button className="btn btn-outline-danger">Delete</button>
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
  )
};
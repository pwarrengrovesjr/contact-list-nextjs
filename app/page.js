"use client";
import { useState } from "react";
import { ContactsAPI } from "@/app/contacts/data/contactsAPI";
import { useRouter } from "next/navigation";
import axios from "axios";
import SearchResults from "./components/searchResults";
import ContactList from "./components/contactList";

export default function Home() {
  const [allContacts, _] = useState(ContactsAPI.all());
  const router = useRouter();
  const [term, setTerm] = useState('');

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
        <div className="col dropdown">
          <input className="form-control" placeholder="Search Contact Names, Emails, & Phone Numbers (format: +12223334444)" type="search" onChange={(e) => setTerm(e.target.value)} value={term}/>
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
            <tbody id="contact-list">
              {term === null ? <ContactList/> : <SearchResults term={term}/>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

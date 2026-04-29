'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ContactsAPI } from '@/app/data/contactsAPI';
import { useState } from 'react';

export default function EditContact() {
	const { id } = useParams();
	let contact = ContactsAPI.get(parseInt(id, 10));


	const [photo, setPhoto] = useState(contact.photo);
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const router = useRouter();
  
    const handleEditContactClick = () => {
      Object.defineProperties(contact, {
        photo: {
          value: photo,
          writable: true
        },
        name: {
          value: name,
          writable: true
        },
        email: {
          value: email,
          writable: true
        },
        phone: {
          value: phone,
          writable: true
        }
      });
      router.push('/contacts');
    };
    
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="">Edit Contact Info</h1>
          <div className="shadow p-3 mb-5 rounded">
            <div className="mb-3 text-center">
              <label className="form-label">Photo</label>
              <input 
                type="text"
                className="form-control"
                placeholder="Enter Image URL"
                defaultValue={contact.photo}
                onChange={(event) => setPhoto(event.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                defaultValue={contact.name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                defaultValue={contact.email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Correct Format: +12223334444"
                defaultValue={contact.phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="mb-3 text-center">
              <button className="btn btn-primary" role="button" onClick={handleEditContactClick}>ADD CHANGES</button>
            </div>
          </div>
        </div>
    )
};
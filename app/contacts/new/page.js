'use client';
import { ContactsAPI } from '@/app/data/contactsAPI';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NewContact = function () {
  const id = Math.round(Math.random() * 100000000);
  const [photo, setPhoto] = useState(null);
	const [name, setName] = useState(null);
	const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
	const router = useRouter();

  const handleAddContactClick = () => {
		ContactsAPI.addContact({
			id,
			photo,
			name,
      email,
      phone
		});
		router.push('/contacts');
	};
  
  return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="">Add New Contact</h1>
        <div className="shadow p-3 mb-5 rounded">
          <div className="mb-3 text-center">
            <label className="form-label">Photo</label>
            <input 
              type="text"
              className="form-control"
              placeholder="Enter Image URL"
              onChange={(event) => setPhoto(event.target.value)}
            />
          </div>
          <div className="mb-3 text-center">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-3 text-center">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-3 text-center">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Correct Format: +12223334444"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="mb-3 text-center">
            <button className="btn btn-primary" role="button" onClick={handleAddContactClick}>ADD NEW CONTACT</button>
          </div>
        </div>
      </div>
  )
};

export default NewContact;
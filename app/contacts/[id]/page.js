'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ContactsAPI } from '@/app/data/contactsAPI';
import { formatPhoneNumber } from 'react-phone-number-input';

export default function Player() {
	const { id } = useParams();
	const contact = ContactsAPI.get(parseInt(id, 10));
	const router = useRouter();


	if (!contact) {
		return <div>Sorry, but the contact was not found</div>;
	}

	return (
		<main>
			<div className='container text-center'>
        <div className="card position-absolute top-50 start-50 translate-middle" style={{width: '18rem'}}>
					<img src={contact.photo} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{contact.name}</h5>
						<p className="card-text">{contact.email}</p>
						<p className="card-text">{formatPhoneNumber(contact.phone)}</p>
						<button className="btn btn-primary" onClick={() => router.push('/contacts')}>Back</button>
					</div>
				</div>
			</div>	
		</main>
	)
};
import PropTypes from "prop-types";
import { formatPhoneNumber } from "react-phone-number-input";

export const ContactsAPI = {
  contacts: [
    {
			id: 70219577,
			name: "Albert Einstein",
			photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/500px-Albert_Einstein_Head_cleaned.jpg",
			email: "aeinstein@example.com",
			phone: "+15555555555"
		}
  ],
	all: function () {
		return this.contacts;
	},
	addContact: function ({ id, photo, name, email, phone }) {
		this.contacts.push({ id, photo, name, email, phone });
	},
	get: function (id) {
		const isContact = (p) => p.number === id;
		return this.players.find(isContact);
	}
};
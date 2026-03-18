export const ContactsAPI = {
  contacts: [
    {
			id: 70219577,
			name: "Albert Einstein",
			photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Albert_Einstein_Head_cleaned.jpg/500px-Albert_Einstein_Head_cleaned.jpg",
			email: "aeinstein@example.com",
			phone: 15555555555
		}
  ],
	all: function () {
		return this.contacts;
	},
	addContact: function ({ photo, name, email, phone }) {
		const id = Math.round(Math.random() * 100000000);
    this.contacts.push({ id, photo, name, email, phone });
	},
	get: function (id) {
		const isContact = (p) => p.number === id;
		return this.players.find(isContact);
	}
}
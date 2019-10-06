export default {
	addUser: (name, email, number) =>
		fetch(`www.someurl.com`).then(res => res.json().catch(err => console.log("error", err))),
};

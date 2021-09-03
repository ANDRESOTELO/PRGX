function postUser(name, email, password, age) {
	const url = "https://api-nodejs-todolist.herokuapp.com/user/register";
	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	let raw = JSON.stringify({
		name: name,
		email: email,
		password: password,
		age: age,
	});

	let requestOptions = {
		method: "POST",
		headers: myHeaders,
		body: raw,
		redirect: "follow",
	};

	return fetch(url, requestOptions)
		.then((response) => response.json())
		.then((result) => console.log(result))
		.catch((error) => console.log("error", error));
}

export default postUser;

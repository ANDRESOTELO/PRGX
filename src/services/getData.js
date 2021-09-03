function getData (email, password) {
	const url = "https://api-nodejs-todolist.herokuapp.com/user/login"
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	var raw = JSON.stringify({
	  "email": email,
	  "password": password,
	});
	
	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};
	return fetch(url, requestOptions)
		.then(response => response.json())
		.then(result => {
			const data = result.token
			return data
		})
		.catch({ return: 400 });
}

export default getData;
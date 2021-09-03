function getUser() { 
	const url = "https://api-nodejs-todolist.herokuapp.com/user/me";

	let myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer`);

	let requestOptions = {
 		method: 'GET',
  		headers: myHeaders,
  		redirect: 'follow'
	};

	return fetch(url, requestOptions)
		.then(response => response.text())
  		.then(result => console.log(result))
  		.catch(error => console.log('error', error));
}

export default getUser
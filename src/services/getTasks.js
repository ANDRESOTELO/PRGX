function getTasks (token) {
	const url = "https://api-nodejs-todolist.herokuapp.com/task"
	var myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${ token }`);
	myHeaders.append("Content-Type", "application/json");
	
	var requestOptions = {
	  method: 'GET',
	  headers: myHeaders,
	  redirect: 'follow'
	};
	return fetch(url, requestOptions)
		.then(response => response.json())
		.then(result => {
			const data = result.data
			return data
		})
		.catch({ return: 400 });
}

export default getTasks;
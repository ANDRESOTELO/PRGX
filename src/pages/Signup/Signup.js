import React, { useState } from 'react';
import './Signup.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Title from '../Login/components/Title/Title';
import Options from '../Login/components/Options/Options';
import Footer from '../../commons/Footer'
import Header from '../../commons/Header'

import postUser from '../../services/postUser'
import { Link } from '@material-ui/core';

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [age, setAge] = useState("");

	function handleChange(name, value) {
		if (name === "name") {
		  	setName(value);
		} if (name === "age") {
		  	setAge(value);
		} if (name === "email") {
			setEmail(value);
		} else  {
			setPassword(value);
		}
	}

	async function handleSubmit() {
		let userNewAccount = JSON.stringify({ name, email, password, age });
		if (userNewAccount) {
		  console.log(userNewAccount);
		}
		const data = await postUser(name, email, password, age);
		// dataContext.setToken(data);
	  }

	return (
		<div className="signup-container">
			<Header />
			<div className="form-container">
				<Title text="Sign Up"/>
				<TextField
				id="name"
				name="name"
				variant="outlined"
				label="Name"
				color="primary"
				type="text"
				placeholder="Enter your name"
				InputProps={{
					startAdornment: (
					<InputAdornment position="start">
						<AccountCircle />
					</InputAdornment>
					)}}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<TextField
				id="age"
				name="age"
				variant="outlined"
				label="Age"
				color="primary"
				type="number"
				placeholder="Enter your age"
				InputProps={{
					startAdornment: (
					<InputAdornment position="start">
						<AccountCircle />
					</InputAdornment>
					)}}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<TextField
				id="email"
				name="email"
				variant="outlined"
				label="Email"
				color="primary"
				type="text"
				placeholder="example@mail.com"
				InputProps={{
					startAdornment: (
					<InputAdornment position="start">
						<Email />
					</InputAdornment>
					)}}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<TextField
				id="password"
				name="password"
				variant="outlined"
				label="Password"
				color="primary"
				type="password"
				placeholder="Create password"
				InputProps={{
					startAdornment: (
					<InputAdornment position="start">
						<Lock />
					</InputAdornment>
					)}}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<Button onClick={handleSubmit} variant="contained" color="secondary" size="medium">
					Register
				</Button>
				<Options text="Already have an account?"/>
				<Link className="sign-in" href="/">Login</Link>
			</div>
			<Footer />
		</div>
	)
}

export default Signup;
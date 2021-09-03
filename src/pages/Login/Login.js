import React, { useState, useContext } from "react";
import "./Login.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Lock from "@material-ui/icons/Lock";
import Email from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";

import { DataContext } from "../../context/DataContext";
import Title from "./components/Title/Title";
import Options from "./components/Options/Options";
import Footer from "../../commons/Footer";
import Header from "../../commons/Header";
import CustomizedSnackbars from "../../commons/Alert"
import getData from "../../services/getData";
import EnhancedTable from '../../Table'
import { Link } from "@material-ui/core";

const Login = () => {
  const dataContext = useContext(DataContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(name, value) {
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  async function handleSubmit() {
    let userAccount = JSON.stringify({ email, password });
    if (userAccount) {
      console.log(userAccount);
    }
	if(email === ""){
		dataContext.setToken("notoken");
	}
	if (password === "") {
		dataContext.setToken("notoken");
	}
    const data = await getData(email, password);
	if (data) {
		dataContext.setToken(data);
	} else {
		dataContext.setToken("error");
	}
    
  }

  return (
    <>
    {dataContext.token === "" && (
        <div className="login-container">
          <Header />
          <div className="form-container">
            <Title text="Sign In" />
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
                ),
              }}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <TextField
              id="password"
              name="password"
              variant="outlined"
              label="Password"
              color="primary"
              type="password"
              placeholder="Enter your password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Options text="Don't have an account?" />
            <Link className="sign-up" href="/signup">
              Sign Up
            </Link>
          </div>
          <Footer />
        </div>
    )}
	{dataContext.token === "notoken" || dataContext.token === "error" && (
		<>
			<CustomizedSnackbars text="Please check your user information or sign up" attributes="warning"/>
			<div className="login-container">
			<Header />
			<div className="form-container">
				<Title text="Sign In" />
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
					),
				}}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<TextField
				id="password"
				name="password"
				variant="outlined"
				label="Password"
				color="primary"
				type="password"
				placeholder="Enter your password"
				InputProps={{
					startAdornment: (
					<InputAdornment position="start">
						<Lock />
					</InputAdornment>
					),
				}}
				onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
				<Button
				variant="contained"
				color="secondary"
				size="medium"
				onClick={handleSubmit}
				>
				Login
				</Button>
				<Options text="Don't have an account?" />
				<Link className="sign-up" href="/signup">
				Sign Up
				</Link>
			</div>
			<Footer />
			</div>
		</>
	)}
	{dataContext.token !== "" && dataContext.token !== "notoken" && dataContext.token !== "error" && (
		<>
			<CustomizedSnackbars text="Login Success" attributes="success"/>
			<EnhancedTable />
		</>
	)}
    </>
  );
};

export default Login;

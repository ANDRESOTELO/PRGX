import React from "react";
import './Header2.css';

import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory } from "react-router-dom";


const Header = () => {
	let history = useHistory();

	const redirect = () => {
		history.push("/profile")
	}
	return (
		<div className="header-container2">
			<div className="main-header2">
				<p>Welcome to the TODO app</p>
				<IconButton color="secondary" aria-label="user">
        			<AccountCircleIcon onClick={redirect} className="user-profile"/>
     			</IconButton>
			</div>
		</div>
	)
}

export default Header;
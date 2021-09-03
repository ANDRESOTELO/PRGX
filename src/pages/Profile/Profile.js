import React, { useContext } from 'react';
import './Profile.css'
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import Mail from '@material-ui/icons/Mail';
import Cake from '@material-ui/icons/Cake';

import Title from '../Login/components/Title/Title'
import Footer from '../../commons/Footer'
import Header from '../../commons/Header'
import getUser from '../../services/getUser'
import { DataContext } from "../../context/DataContext";

const StyledBadge = withStyles((theme) => ({
	badge: {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		borderRadius: '50%',
		animation: '$ripple 1.2s infinite ease-in-out',
		border: '1px solid currentColor',
		content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
		transform: 'scale(.8)',
		opacity: 1,
		},
		'100%': {
		transform: 'scale(2.4)',
		opacity: 0,
		},
	},
}))(Badge);

const useStyles = makeStyles((theme) => ({
	root: {
		width: '120px',
		height: '120px'
}}));

const Profile = () => {
	const dataContext = useContext(DataContext);

	const classes = useStyles();

	const user = getUser();
	console.log(user)


	return (
		<div className="general-profile">
			<Header />
			<div className="profile-container">
				<div className="header">
					<Title className ="title" text="Welcome back Andrés!"/>
				</div>
				<div className="avatar-background">
					<div className="avatar">
						<StyledBadge
							overlap="circular"
							anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
							}}
							variant="dot"
						>
							<Avatar className={classes.root}/>
						</StyledBadge>
					</div>
				</div>
				<div className="profile-info">
					<div className="profile-item">
						<Person/>
						<p>Andrés Sotelo</p>
					</div>
					<div className="profile-item">
						<Mail/>
						<p>andres@gmail.com</p>
					</div>
					<div className="profile-item">
						<Cake/>
						<p>35 years old</p>
					</div>
				</div>


			</div>
			<Footer/>
		</div>
	)
}

export default Profile;
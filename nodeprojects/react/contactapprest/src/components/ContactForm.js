import React from 'react';
import {Label} from 'react-bootstrap';

export default class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		this.state= {
			firstName:"",
			lastName:"",
			email:"",
			phone:""
		}
	
	}

	change = (event) => {
		if (event.target.name === "firstName") {
			this.setState({
				firstName:event.target.value
			})
		}
		if (event.target.name === "lastName") {
			this.setState({
				lastName:event.target.value
			})
		}
		if (event.target.name === "email") {
			this.setState({
				email:event.target.value
			})
		}
		if (event.target.name === "phone") {
			this.setState({
				phone:event.target.value
			})
		}	
		
	}
	
	
	submit = (event) => {
		event.preventDefault();
		let contact= {
			"firstName":this.state.firstName,	
			"lastName":this.state.lastName,	
			"email":this.state.email,
			"phone":this.state.phone
		}
		this.props.updateContacts(contact);
	}
	
	render() {
		return(
			<form onSubmit={this.submit}>
				<Label htmlFor="firstName">First Name</Label>
				<input type="text"
					name="firstName"
					onChange={this.change}
					value={this.state.firstName}/>
				<br/>	
				<Label htmlFor="lastName">Last Name</Label>
				<input type="text"
					name="lastName"
					onChange={this.change}
					value={this.state.lastName}/>
				<br/>
				<Label htmlFor="email">Email</Label>
				<input type="email"
					name="email"
					onChange={this.change}
					value={this.state.email}/>
				<br/>
				<Label htmlFor="phone">Phone</Label>
				<input type="text"
					name="phone"
					onChange={this.change}
					value={this.state.phone}/>
				<br/>
				<input type="submit" value="Add Contact"/>	
			</form>
				)
		
	}
 
}
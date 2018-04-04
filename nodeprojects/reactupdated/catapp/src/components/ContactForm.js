import React from 'react';
import {Label} from 'react-bootstrap';

export default class ContactForm extends React.Component {
	
	constructor(props) {
		super(props);
/*		
		this.state= {
			firstName:"",
			lastName:"",
			email:"",
			phone:""
		}
*/	
		this.state= {
			name:"",
			age:"",
			ownerid:""
		}
	}
	change = (event) => {
		if (event.target.name === "name") {
			this.setState({
				name:event.target.value
			})
		}
		if (event.target.name === "age") {
			this.setState({
				age:event.target.value
			})
		}
		if (event.target.name === "ownerid") {
			this.setState({
				ownerid:event.target.value
			})
		}		
	}
	
	
/*	
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
*/	

	submit = (event) => {
		event.preventDefault();
		let contact= {
			"name":this.state.name,
			"age":this.state.age,
			"ownerid":this.state.ownerid
		}
		this.props.updateContacts(contact);		
	}

/*
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
*/	
/*
	render() {
		return(
			<form onSubmit={this.submit}>
				<Label htmlFor="firstName">First Name:</Label>
				<input type="text"
					   name="firstName"
					   onChange={this.change}
					   value={this.state.firstName}/>
				<br/>
				<Label htmlFor="lastName">Last Name:</Label>
				<input type="text"
					   name="lastName"
					   onChange={this.change}
					   value={this.state.lastName}/>
				<br/>
				<Label htmlFor="email">Email:</Label>
				<input type="email"
					   name="email"
					   onChange={this.change}
					   value={this.state.email}/>
				<br/>
				<Label htmlFor="phone">Phone:</Label>
				<input type="text"
					   name="phone"
					   onChange={this.change}
					   value={this.state.phone}/>
				<br/>
				<input type="submit" value="Add Contact"/>
			</form>
				)
	}
*/

	render() {
		return(
			<form onSubmit={this.submit}>
				<Label htmlFor="name">Name:</Label>
				<input type="text"
					   name="name"
					   onChange={this.change}
					   value={this.state.name}/>
				<br/>
				<Label htmlFor="age">Age:</Label>
				<input type="number"
					   name="age"
					   onChange={this.change}
					   value={this.state.age}/>
				<br/>
				<Label htmlFor="ownerid">OwnerID:</Label>
				<input type="number"
					   name="ownerid"
					   onChange={this.change}
					   value={this.state.ownerid}/>
				<br/>
				<input type="submit" value="Add Cat"/>
			</form>
				)
	}

}
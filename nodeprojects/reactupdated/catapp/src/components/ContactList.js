import React from 'react';
import {Table, Button} from 'react-bootstrap';

export default class ContactList extends React.Component {
	
	deleteContact = (event) => {
		this.props.deleteContact(event.target.name);	
	}
	
	updateContact = (event) => {
		this.props.updateContact(event.target.name);	
	}
	
	
	render() {
		console.log(this.props.contactList);
		let listItems = this.props.contactList.map((item) => 
			<tr key={item.catid}>
				<td>{item.name}</td>
				<td>{item.age}</td>
				<td>{item.ownerid}</td>
				<td><Button onClick={this.deleteContact}
							name={ item.catid }>Remove
				   </Button></td>
				<td><Button onClick={this.updateContact}
							name={ item.catid }>Update
				   </Button></td>
			</tr>
		)
		return(
			<div>
			<center>
			<Table striped bordered>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
						<th>OwnerID</th>
						<th>Remove</th>
						<th>Update...</th>
					</tr>
				</thead>
				<tbody>
					{listItems}
				</tbody>
			</Table>
			</center>
			</div>
		)
	
	}
	
/*	
	render() {
		let listItems = this.props.contactList.map((item) => 
			<tr key={item.id}>
				<td>{item.firstName}</td>
				<td>{item.lastName}</td>
				<td>{item.email}</td>
				<td>{item.phone}</td>
				<td><Button onClick={this.deleteContact}
							name={item.id.toString()}>Remove
				    </Button></td>
			</tr>
		)
		return(
			<div>
			<center>
			<Table striped bordered>
				<thead>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{listItems}
				</tbody>
			</Table>
			</center>
			</div>
		)
	
	}
*/
}
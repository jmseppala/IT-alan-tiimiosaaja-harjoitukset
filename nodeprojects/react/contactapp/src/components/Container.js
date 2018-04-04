import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default class Container extends React.Component {
		constructor(props) {
		super(props);
		this.state={
			contactList:[],
			id:100
		}
	}
	
	updateContacts = (contact) => {
		contact.id = this.state.id;
		let tempId = this.state.id+1;
		let tempList = this.state.contactList;
		tempList.push(contact);
		this.setState({
			contactList:tempList,
			id:tempId
		})
		console.log(this.state.contactList);
	}
	
	
	deleteContact = (id) => {
		for (let i=0;i<this.state.contactList.length;i++) {
			if (id === this.state.contactList[i].id.toString()) {
				let tempList = this.state.contactList;
				tempList.splice(i,1);
				this.setState({
					contactList:tempList
				})
				return;
			}
		
		}
	
	}	
	
	render() {
		return (
			<div>
				<ContactForm updateContacts={this.updateContacts}/>
				<hr></hr>
				<ContactList contactList={this.state.contactList}
				             deleteContact={this.deleteContact}/>
			</div>
		)
	}
}
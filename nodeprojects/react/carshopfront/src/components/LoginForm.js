import React from 'react';

	export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			uname:"",
			passphrase:""
		}	
	}

	onChange = (event) => {
		if(event.target.name === "uname") {
			this.setState({
				uname:event.target.value
		});
	}
		if(event.target.name === "passphrase") {
		this.setState({
			passphrase:event.target.value
		});	
	   }
	 }
	 

	onSubmit = (event) => {
		console.log("onsubmit")
		let user = {
			"uname":this.state.uname,
			"passphrase":this.state.passphrase
		}
		if(event.target.name === "login") {
			this.props.onLogin(user);
		}
		if(event.target.name === "register") {
			console.log("register")
			this.props.onRegister(user);
		}
		event.preventDefault();
	}
		

	render() {
		return(
		<form onSubmit={this.onSubmit}>
			<label htmlFor="uname">Username</label>
			<input type="text"
				   name="uname"
				   value={this.state.uname}
				   onChange={this.onChange}/>
			<br/>
			<label htmlFor="passphrase">Passphrase</label>		
			<input type="password"
				   name="passphrase"
				   value={this.state.passphrase}
				   onChange={this.onChange}/>
			<br/>
			<input type="button"
				   name="register"
				   value="Register"
				   onClick={this.onSubmit}/>
			<input type="button"
				   name="login"
				   value="Login"
				   onClick={this.onSubmit}/>
		</form>
		
		  )
		}
	}
			
			
		
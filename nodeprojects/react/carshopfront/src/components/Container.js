import React from 'react';
import Header from './Header';
import Main from './Main';

export default class Container extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			carList:[],
			isLogged:false,
			mode:"Add",
			token:"",
			editableCar:{}
		}
	}
	
	componentDidMount() {
		if(!sessionStorage.getItem("loginStatus")){
			sessionStorage.setItem("loginStatus","not logged");
			sessionStorage.setItem("token","");
			return;
		}
		let loginStatus = sessionStorage.getItem("loginStatus");	
		let token = sessionStorage.getItem("token");
		if(loginStatus === "logged") {
			console.log("loginstatus true");
			this.setState({
				isLogged:true,
				token:token
			})
			this.getCarList();
		}
	}
	
	getCarList = () => {
		let onGetCarList = {
			method:"GET",
			mode:"cors",
			headers:{"Content-Type":"application/json",
					 "token":this.state.token}
		}
		fetch("/api/cars",onGetCarList).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						carList:data
					})
				})
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		});
		
	}
	
	addCar = (newCar) => {
		let onAddCar = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json",
					 "token":this.state.token},
			body:JSON.stringify({
				type:newCar.type,
				price:newCar.price,
				year:newCar.year
			})
		}
		fetch("/api/cars",onAddCar).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					console.log(data);
				})
				this.getCarList();
			} else {
				console.log(response.statusText);
			}	
		}).catch((error) => {
			console.log(error);
		});		
	}
	
	buyCar = (id) => {
		let onBuyCar = {
			method:"DELETE",
			mode:"cors",
			headers:{"Content-Type":"application/json",
					 "token":this.state.token}
		}
		fetch("/api/cars/"+id,onBuyCar).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					console.log(data);
				})
				this.getCarList();
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		})
	}
	
	editCar = (id) => {
		for (let i = 0;i<this.state.carList.length;i++) {
			if(id === this.state.carList[i]._id) {
				console.log("edit: Match found");
				this.setState({
					editableCar:this.state.carList[i],
					mode:"Edit"
				})
			}
		}
	}
	
	updateCar = (car) => {
		let onUpdateCar = {
			method:"PUT",
			mode:"cors",
			headers:{"Content-Type":"application/json",
					 "token":this.state.token},
			body:JSON.stringify({
				type:car.type,
				price:car.price,
				year:car.year
			})
		}
			fetch("/api/cars/"+car._id,onUpdateCar).then((response) =>{
				if(response.ok) {
					response.json().then((data) => {
						console.log(data);
						this.getCarList();
						this.setState({
							mode:"Add"
						})
					})
				} else {
					console.log(response.statusText)
				}
			}).catch((error) => {
				console.log(error);
			})
		}
	
	onLogin = (user) => {
		let onLogin = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"uname":user.uname,
				"passphrase":user.passphrase
			})
		}	
		fetch("/login",onLogin).then((response) => {
			if(response.ok) {
				response.json().then((data) => {
					this.setState({
						token:data.token,
						isLogged:true
					})
					sessionStorage.setItem("loginStatus","logged");
					sessionStorage.setItem("token",data.token);
					this.getCarList();
				})
			} else {
				console.log(response.statusText);
			}	
		}).catch((error) => {
			console.log(error);
		})
		
	}
	
	onLogout = () => {
		let onLogout = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json",
					 "token":this.state.token}
		}
		fetch("/logout",onLogout).then((response) => {
			if(response.ok) {
				this.setState({
					token:"",
					isLogged:false
				})
				sessionStorage.setItem("loginStatus","not logged");
				sessionStorage.setItem("token","");
			} else {
				console.log(response.statusText);
			}
		}).catch((error) => {
			console.log(error);
		})
	}

	onRegister = (user) => {
		let onRegister = {
			method:"POST",
			mode:"cors",
			headers:{"Content-Type":"application/json"},
			body:JSON.stringify({
				"uname":user.uname,
				"passphrase":user.passphrase
			})
		}
		console.log("register fetch");
		fetch("/register", onRegister).then((response) => {
			response.json().then((data) => {
				console.log("register success!")
				console.log(data);
				alert("Register success!");
			})
		}).catch((error) => {
			console.log(error);
		});
	}

	render() {
		return(
			<div>
				<Header isLogged={this.state.isLogged}
						onLogout={this.onLogout}/>
				<Main isLogged={this.state.isLogged}
					  onLogin={this.onLogin}
					  onRegister={this.onRegister}
					  mode={this.state.mode}
					  addCar={this.addCar}
					  buyCar={this.buyCar}
					  editCar={this.editCar}
					  carList={this.state.carList}
					  editableCar={this.state.editableCar}
					  updateCar={this.updateCar}/>
			</div>
		)
	
	}

}
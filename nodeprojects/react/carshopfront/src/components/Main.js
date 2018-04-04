import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import 	CarForm from './CarForm';
import CarList from './CarList';
import LoginForm from './LoginForm';

export default class Main extends React.Component {

	render() {
	
	return(
		<Switch>
			<Route exact path="/"
				render={() => this.props.isLogged ?
					(<Redirect to="/list" />) :
					(<LoginForm 
						onLogin={this.props.onLogin}
						onRegister={this.props.onRegister}
						/>)} 
			/>
			<Route path="/list"
				render={() => this.props.isLogged ?
					(<CarList carList={this.props.carList}
							  buyCar={this.props.buyCar}
							  editCar={this.props.editCar}/>) :
					(<Redirect to="/"/>)
					}/>
			<Route path="/form"
				render={() => this.props.isLogged ?
					(<CarForm addCar={this.props.addCar} 
							  mode={this.props.mode}
							  updateCar={this.props.updateCar}
							  editableCar={this.props.editableCar}/>) :
					(<Redirect to="/"/>)
					}/>							
		</Switch>)
	}
}
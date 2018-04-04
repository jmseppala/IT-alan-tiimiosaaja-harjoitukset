import React from 'react';
import {Link} from 'react-router-dom';
export default class CarList extends React.Component {

	onBuyCar = (event) => {
		this.props.buyCar(event.target.name);	
	}
	
	onEditCar = (event) => {
		this.props.editCar(event.target.id);	
	}
	

	render(){
		let tempView = {}
		if (this.props.carList.length === 0) {
		tempView = <p>Nothing on the list </p>
		} else {
			tempView = this.props.carList.map((car) =>
				<tr key={car._id}>
				<td>{car.type}</td>
				<td>{car.price}</td>
				<td>{car.year}</td>
				<td><button name={car._id}
							onClick={this.onBuyCar}>Buy</button>
							</td>
			<td><Link to="/form" id={car._id}
							onClick={this.onEditCar}>Edit</Link></td>
				</tr>
		)
	}	
	return(
	<div>
	<center>
		<table>
			<thead>
				<tr>
					<th>Type</th>
					<th>Price</th>
					<th>Year</th>
					<th>Buy</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>	
			{tempView}
			</tbody>
		</table>
		</center>
		</div>
	)
  }

}	
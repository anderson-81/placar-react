import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Time from './Time';
import Partida from './Partida';

class PlacarContainer extends Component{

	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<div style={{float:"left",marginRight:"10px"}}>
					<h3>Casa</h3>
					<Time />
				</div>
				<div style={{float:"left",marginRight:"10px"}}>
					<Partida />
				</div>
				<div style={{float:"left",marginRight:"10px"}}>
					<h3>Visitante</h3>
					<Time />
				</div>
				<div style={{clear:"both"}}></div>
			</div>
		)
	}
}

export default PlacarContainer
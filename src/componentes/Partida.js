import React, { Component } from 'react';

class Partida extends Component{

	render(){
		return(
			<div style={{'margin-top':'15%'}}>
				<h4>{this.props.estadio}</h4>
				<div>
					<span>{this.props.data}</span>
					<span> - </span>
					<span>{this.props.horario}</span>
				</div>
			</div>
		)
	}
}

export default Partida
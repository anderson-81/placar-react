import React, { Component } from 'react';
import Time from './Time';
import Partida from './Partida';
import PropTypes from 'prop-types'
import '../assets/bootstrap.min.css'

class PlacarContainer extends Component{

	constructor(){
		super()
		this.state = {
			gols_casa: 0,
			gols_vist: 0
		}
	}

	marcarGolCasa(){
		this.setState({
			gols_casa: this.state.gols_casa + 1
		})
	}

	marcarGolVist(){
		this.setState({
			gols_vist: this.state.gols_vist + 1
		})
	}

	render(){

		const { partida, casa, visitante } = this.props

		return(
			<div class="row" style={{'margin-top':'7%'}}>
				<div class="col-md-4 text-center">
					<h5>Casa</h5>
					<Time 
						nome={casa.nome} 
						gols={this.state.gols_casa} 
						marcarGol={this.marcarGolCasa.bind(this)} 
					/>
				</div>
				<div class="col-md-4 text-center">
					<Partida 
						{...partida}
					/>
					<div>{this.props.clima}</div>
					<div><strong>{this.props.temperatura}º GRAUS</strong></div>
				</div>
				<div class="col-md-4 text-center">
					<h5>Visitante</h5>
					<Time 
						nome={visitante.nome} 
						gols={this.state.gols_vist} 
						marcarGol={this.marcarGolVist.bind(this)} 
					/>
				</div>
			</div>
		)
	}
}

PlacarContainer.propTypes = {
  clima: PropTypes.string,
  temperatura: PropTypes.number.isRequired,
};

PlacarContainer.defaultProps = {
  clima: 'Ensolarado'
};


export default PlacarContainer


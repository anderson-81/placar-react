import React, { Component } from 'react'
import PlacarContainer from './componentes/PlacarContainer'
import './assets/bootstrap.min.css'
import './assets/style.css'

const dados = {
	partida: {
		estadio: 'Maracanã/RJ',
		data: '08/06/2019',
		horario: '19h'
	},
	casa: {
		nome: 'Flamengo'
	},
	visitante: {
		nome: 'Vasco'
	}
};

export default class App extends Component{
	render(){
		return (<PlacarContainer {...dados} temperatura={26} class="container" />)
	}
}
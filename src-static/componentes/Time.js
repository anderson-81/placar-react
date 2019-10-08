import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BotaoGol from './BotaoGol'

class Time extends Component{

	constructor(){
		super()
	}

	render(){
		return(
			<div>
				<h1>Flamengo</h1>
				<h2>0</h2>
				<BotaoGol />
			</div>
		)
	}
}

export default Time
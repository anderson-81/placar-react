import React, { Component } from 'react';
import '../assets/bootstrap.min.css'

class BotaoGol extends Component{

	handleClick(event){
		event.preventDefault()
		this.props.marcarGol()
	}

	render(){
		return(
			<button style={{'margin-top':'15%'}} class="btn btn-success col-md-4" onClick={this.handleClick.bind(this)}>GOL</button>
		)
	}
}

export default BotaoGol
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
import React, { Component } from 'react';
//	import PropTypes from 'prop-types';
	
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	import './css/Content.css';

//	──[	COMPONENT Footer ]───────────────────────────────────────────────────────────────
	class Content extends Component {
		
		constructor(props){
			super(props);
			console.log(this.props);
			this.state = {
				countRender:0,
				count:0,
				number1:0,
				number2:0,
				result:0,

			}
			this.handleCountClick = this.handleCountClick.bind(this);
			this.handleResultClick = this.handleResultClick.bind(this);
			this.handleInpuntChanged = this.handleInpuntChanged.bind(this);
		}
		
		componentDidMount(){
			this.setState({
				countRender: this.state.countRender+1
			})
		}

		handleCountClick(e){
			console.log(e);
			if (e.target.id ==='add') {
				this.setState({
					count: this.state.count+1
				})
			}else if(e.target.id ==='subtract' &&  this.state.count > 0){
				this.setState({
					count: this.state.count-1
				})
			}else{
				this.setState({
					count: 0
				})
			};

		}
		handleResultClick(e){
			this.setState({
				result: this.state.number1 + this.state.number2
			})

		}
		handleInpuntChanged(e){
			if (e.target.id ==='number1') {
				this.setState({
					number1: Number(e.target.value)
				})
			} else{
				this.setState({
					number2: Number(e.target.value)
				})
			}

		}
		render() {
			// 	Se ejecutara esta linea cada vez que se actualice el state
				var countRender = this.state.countRender;
				console.log(`Ejecuta Render ${countRender}`);
			return (
				<div className="Content">
					<h1 className="App-title">Soy el contenido</h1>
					<p>Lorem ipsum...</p>
					<h2>Counter: {this.state.count}</h2>
					<p>
						<button id="add" onClick={this.handleCountClick}>+</button>
						<button id="subtract" onClick={this.handleCountClick}>-</button>
						<button id="reset" onClick={this.handleCountClick}>Reset</button>
					</p>
					<h2>Calculadora</h2>
					<p>
						<input id="number1" type="number" value={this.state.number1} onChange={this.handleInpuntChanged}/>
						+
						<input id="number2" type="number" value={this.state.number2} onChange={this.handleInpuntChanged}/>
						<button id="result" onClick={this.handleResultClick}>=</button>
					</p>
					<h3>Result: {this.state.result}</h3>
				</div>
			);
		}
	};

//	──[	EXPORT Footer ]──────────────────────────────────────────────────────────────────
	export default Content;
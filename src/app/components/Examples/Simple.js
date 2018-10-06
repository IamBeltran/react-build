//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
    import React, { Component } from 'react';
//	import PropTypes from 'prop-types';
	
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT REACT COMPONENT.															│
//	└───────────────────────────────────────────────────────────────────────────────────┘
//	import './css/Content.css';

//	──[	COMPONENT Footer ]───────────────────────────────────────────────────────────────
	class Simple extends Component {
		static  propTypes = {
			children: PropTypes.object.isRequired,
		};
		
		constructor(props){
			super(props);
			this.state = {}

		}
		
		componentDidMount(){}
	
		render() {
			return (
				<div className="simple">
					<h1 className="App-title">Soy el contenido</h1>
				</div>
			);
		}
	};

//	──[	EXPORT Footer ]──────────────────────────────────────────────────────────────────
	export default Simple;
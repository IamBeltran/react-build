	"use strict";
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	IMPORT NODE MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	const concurrently	= require('concurrently');
	const colors		= require('colors');

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	DECLARATION OF CONSTANTS.														│
//	└───────────────────────────────────────────────────────────────────────────────────┘

//	──[ NODE ENVIRONMENT.	]────────────────────────────────────────────────────────────
	const ENV = process.env.NODE_ENV;
	const TASK_RUN = process.env.TASK;

//	──[ CONMMANDS.	]────────────────────────────────────────────────────────────────────
	const conmmands = [
		// 0
		{
			command:	'json-server -c ./jsonserver/json-server.json ./jsonserver/json-server-data.json',
			name:		'JSV',
			prefixColor:'green'
		},
		// 1
		{
			command:	'webpack-dev-server',
			name:		'WDS',
			prefixColor:'blue'
		},
	];

//	──[ CONMMANDS.	]────────────────────────────────────────────────────────────────────	
	const TASK = {
		REACT_DEV: [
			conmmands[0],
			conmmands[1]
		]
	};

	const OPTIONS = {
		prefix: 			'name',
		prefixLength:		10,
		killOthers:			['failure', 'success'],
		successCondition:	'all',
		restartDelay:		5000,
		restartTries: 		3
	}

//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	RUN CONCURRENTLY.																│
//	└───────────────────────────────────────────────────────────────────────────────────┘	
	concurrently(
		TASK["REACT_DEV"],
		OPTIONS
	)
	.then(
		() => {  
			console.log(`────────────────────────────────────────────────────`.green);
			console.log(`[SUCCESS] → SE COMPLETARON LAS TAREAS o(^-^)o`.green)
			console.log(`────────────────────────────────────────────────────`.green);
		},	
		err => {
			console.log(`────────────────────────────────────────────────────`.red);
			console.log(`[FAILURE] → NO SE COMPLETARON LAS TAREAS (つ﹏<。)`.red)
			console.log(`────────────────────────────────────────────────────`.red);
		}	
	);

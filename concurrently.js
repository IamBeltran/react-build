
	const concurrently = require('concurrently');
	
	function success(){console.log(':)')};
	function failure(){console.log(':(')};
	
	concurrently([
		'npm:echo-*', 
			{
				command: 'nodemon',
				name: 'DEVELOPMENT',
				//prefixColor:'green'
			}
		],
		{
			prefix: 'name',
			killOthers: ['failure', 'success'],
			restartTries: 3,
		}).then(success, failure);
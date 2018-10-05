	"use strict";
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	REQUIRE NODE-MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
	const utils = require('../src/utils/index');

	//var crypt = "$2a$10$R3OTxe0orgX1DsWXuEkNh.kqi1i2W7cIT1AKfTABdANOhHkAkTPyW";
	//console.log(utils.encryptSync("Mabel560"));
	//console.log(utils.compareCryptSync("Mabel560",crypt));
	console.log(utils.createToken({ id:1,name:"Victor Beltrán Rodríguez",nickname:"bowie",role:"supervisor",level:31}));

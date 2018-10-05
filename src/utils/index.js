"use strict";
//	┌───────────────────────────────────────────────────────────────────────────────────┐
//	│	REQUIRE NODE-MODULE DEPENDENCIES.												│
//	└───────────────────────────────────────────────────────────────────────────────────┘
    const bcrypt = require('bcryptjs');

//	──[	EXPORT MODULE ]─────────────────────────────────────────────────────────────────
    module.exports = {
        encryptSync: (_string) => {
            var salt = bcrypt.genSaltSync(10);
            var hash = bcrypt.hashSync(_string, salt);
            return hash;
        },
        compareCryptSync: (_string, _hash) =>{
            return bcrypt.compareSync(_string, _hash);
        }

    }

    

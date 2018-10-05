'use strict'

const jwt = require('jwt-simple')
const moment = require('moment')
const SECRET_TOKEN = 'mabel560';

function createToken (user) {
  const payload = {
    sub: {        
      id:user.id,
      name:user.name,
      nickname:user.nickname,
      role:user.role,
      level:user.level
    },   
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  }
  return jwt.encode(payload, SECRET_TOKEN)
}

function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, SECRET_TOKEN)

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        })
      }
      resolve(payload.sub)
    } catch (err) {
      reject({
        status: 500,
        message: 'Invalid Token'
      })
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
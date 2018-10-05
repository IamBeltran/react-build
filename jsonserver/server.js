// server.js
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./jsonserver/json-server-data.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use(router)
server.listen(3001, () => {
    console.log(__dirname)
  console.log('JSON Server is running')
})
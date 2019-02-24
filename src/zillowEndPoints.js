const express = require('express')
const Router = express.Router()

Router.get('/',(request, response)=>{
    response.json('Zillow / Endpoint')
})

module.exports = Router
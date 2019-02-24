const express = require('express')
const User = express.Router()
let bodyParser = require('body-parser')

User.use(bodyParser)

User.get('/',(request, response)=>{
    response.json({message:"use POST"})
})

User.post('/',(request, response, next)=>{
    console.log(request.body)
    
})

module.exports = User

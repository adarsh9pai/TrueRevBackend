const express = require('express')
const User = express.Router()
const bodyParser = require('body-parser')
const AWS = require('aws-sdk/dist/aws-sdk-react-native')

User.use(bodyParser)

User.get('/',(request, response)=>{
    response.json({message:"use POST"})
})

User.post('/',(request, response, next)=>{
    console.log(request.body)
    
})

module.exports = User
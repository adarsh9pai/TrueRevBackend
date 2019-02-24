const express = require('express')
const Router = express.Router()
const Zillow = require('node-zillow')
let zillow = new Zillow('X1-ZWz1gxbstyyhvv_2f38x')

    
Router.get('/',(request, response)=>{
    let regionChilden = zillow.get('GetRegionChart', {state: request.query.state || 'NaN'})
    let getDemographics = zillow.get('GetDemographics', {zip: request.query.zip || 'NaN'})
    response.json({zillow:{regionChilden : regionChilden, getDemographics : getDemographics}})


})

module.exports = Router
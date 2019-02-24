const express = require('express')
const Router = express.Router()
const Zillow = require('node-zillow')
const cvars = require('./constants')
let zillow = new Zillow(cvars.ZILLOW)

    
Router.get('/',(request, response)=>{
//    let regionChildren = zillow.get('GetRegionChart', {state: request.query.state || 'NaN', "unit-type": null})
    let getDemographics = zillow.get('GetDemographics', {zip: request.query.zip || 'NaN'})

  //  let allList = []
    Promise.all([getDemographics]).then(data => {
	response.json(data)
    })
//    response.json({zillow:{/*regionChilden : regionChilden, */getDemographics : getDemographics}})
//	response.send('testing')
})

module.exports = Router

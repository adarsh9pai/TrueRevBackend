const express = require('express')
const Router = express.Router()
const cvars = require('./constants')
const fetch = require('node-fetch')
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

Router.get('/',(req, res)=>{

	if(req.query.latitude && req.query.longitude && req.query.searchDistance)
	{
		//getRecreation(cvars.ATTOM, req.query.latitude, req.query.longitude, req.query.searchDistance, res)


		let url = 'https://search.onboard-apis.com/poisearch/v2.0.0/poi/point?Point=POINT('+req.query.latitude+'%2C'+req.query.longitude+')&SearchDistance='+req.query.searchDistance+'&RecordLimit=10&BusinessCategory=ATTRACTIONS - RECREATION&Sort=DISTANCE'
		fetch(url, {
			headers: {
				Accept: 'application/json',
				APIKey: cvars.ATTOM
			}
		}).then((result) => {return result.json()}).then( (finres) => {
			res.json( {result : finres.response.result.package.item})
		})

		/*let attractions = fetch(url, {
				headers: {
					Accept: 'application/json',
					APIKey: cvars.ATTOM
				}
		})

		let schools = fetch(url, {
			headers: {
				Accept: 'application/json',
				APIKey: cvars.ATTOM
			}
		})

		Promise.all([attractions, schools]).then( (result) => {
			return result.json()
		}).then( (finresult) => {
			res.json( {response : finresult.response.result.package.item })
		})*/

	}
	else
	{
		res.json({message : "error"})
	}
})

module.exports = Router

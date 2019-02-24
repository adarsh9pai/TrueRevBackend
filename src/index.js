const express = require('express')
const app = express()
const port = 3000
const childProcess = require('child_process')
const database = require('./database.js')
const bodyParser = require('body-parser').json()
const Zillow = require('./zillowEndPoints')

app.use('/Zillow',Zillow)
app.listen(port, () => console.log('Listening on port', port))

app.get('/truerev/', (req, res) => res.json({ message: 'Hello World' }))

app.post('/truerev/user/create', bodyParser, (req, res) => {
	if(req.body.name && req.body.email)
	{
		database.createUser(req.body.email, req.body.name)
		res.json({ message : 'succeeded'})
	}
	else
	{
		res.json({ message : 'failed' })
	}
})

app.post('/truerev/video/upload', bodyParser, (req, res) => {
	if(req.body.videofile && req.body.email)
	{
		
	}
	res.json({message:'recieved'})
})

app.post('/webhooks/github', (req, res) => {
    console.log("github update called")
    /*var sender = req.body.sender;
    var branch = req.body.ref;*/

    //deploy(res)
})

const deploy = (res) => {
    childProcess.exec('cd /home && ./deploy.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err)
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
}

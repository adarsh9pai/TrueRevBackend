const express = require('express')
const app = express()
const port = 3000
const childProcess = require('child_process')
const database = require('./database.js')
const bodyParser = require('body-parser').json()
const Zillow = require('./zillowEndPoints')
const multer = require('multer')
const multerupload = multer({ dest: 'Videos/' })
const Attom = require('./attomEndPoints')

app.set('json spaces', 2)
app.use(bodyParser)
app.use(function(req, res, next) {
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
})
app.use('/truerev/Zillow', Zillow)
app.use('/truerev/Attom', Attom)

app.listen(port, () => console.log('Listening on port', port))

app.get('/truerev/', (req, res) => res.json({ message: 'Hello World' }))

app.post('/truerev/user/create', (req, res) => {
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

app.post('/truerev/video/upload', multerupload.any(), upload.fileupload)

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
    })}


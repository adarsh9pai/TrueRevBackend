const express = require('express')
const app = express()
const port = 3000
const childProcess = require('child_process')

app.listen(port, () => console.log('Listening on port', port))

app.get('/truerev/', (req, res) => res.send('Hello World'))

app.post('/webhooks/github', (req, res) => {
    console.log("github update called")
    /*var sender = req.body.sender;
    var branch = req.body.ref;*/

    if (branch.indexOf('master') > -1) {
        deploy(res)
    }
})

app.get('/truerev/test', (req, res) => res.send("Testing good"))

const deploy = (res) => {
    childProcess.exec('cd /home && ./deploy.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(err)
            return res.send(500)
        }
        res.send(200)
    })
}
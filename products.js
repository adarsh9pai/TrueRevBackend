var fetch = require("node-fetch")
var await = require("await")
const Service='service'
const AWSAccessKeyId='blah'

const doFetch = async(url)=>{
	const response = await fetch(url);
	const j = await response.json();
	console.log(j);
	return j;
}

ret = await (doFetch('http://52.86.115.88/truerev'))
console.log('returned: '+JSON.stringify(ret))

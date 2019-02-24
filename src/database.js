const Firestore = require('@google-cloud/firestore')

module.exports.getUser = async function main(useremail)
{
	try
	{
		const firestore = new Firestore({
			projectId: 'truerev-2',
			keyFilename:  'truerev-2-4def494cc017.json'
		})

		let finalresult = null
		await firestore.collection('Users').doc(useremail).get().then((result) => finalresult = result.data())
	}
	catch(err)
	{
		console.error(err)
	}
}

module.exports.createUser = async function createUser(email, username)
{
	try
	{
		//const firestore = new Firestore()
		const firestore = new Firestore({
			projectId: 'truerev-2',
			keyFilename: 'truerev-2-4def494cc017.json'
		})
		
		let document = firestore.collection('Users').doc(email)
		await document.set({
			email: email,
			name: username,
			videos: []
		})
		console.log('writing user: ' + email)
	}
	catch(err)
	{
		console.error(err)
	}
}

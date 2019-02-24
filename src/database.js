const Firestore = require('@google-cloud/firestore')

module.exports.GetUser = async function main(useremail)
{
	try
	{
		console.log('starting')
		const firestore = new Firestore({
			projectId: 'truerev-2',
			keyFilename:  'truerev-2-4def494cc017.json'
		})

		let finalresult = null
		await firestore.collection('Users').doc(useremail).get().then((result) => finalresult = result.data())
		console.log(finalresult)
	}
	catch(err)
	{
		console.error(err)
	}
}

module.exports.CreateUser = async function createUser(email, username)
{
	try
	{
		//const firestore = new Firestore()
		const firestore = new Firestore({
			projectId: 'truerev-2',
			keyFilename: 'truerev-2-4def494cc017.json'
		})

		console.log('creating user')
		let document = firestore.collection('Users').doc(email)
		await document.set({
			email: email,
			name: username,
			videos: []
		})

		console.log('entered data into the document')
	}
	catch(err)
	{
		console.error(err)
	}
}

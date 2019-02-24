const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const apiCall = (url, authKey, authValue, res) => {
    var request = new XMLHttpRequest();
    request.open('GET', url, /* async = */ false);
    request.setRequestHeader('accept', 'application/json')
    request.setRequestHeader(authKey, authValue)
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            console.log(request.responseText)
            //res.json({ response: request.responseText })
        }
    }
    request.send();
}

const apiCalls = (urls, authKeys, authValues, res) => {
    const requests = urls.map(url => fetch(url))
    const resultList = []
    Promise.all(urls.map(u => fetch(u))).then(responses =>
        Promise.all(responses.map(resp => resp.text()))
    ).then(texts => {
        resultList = responses
    })
}
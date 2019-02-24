/*
returns list of objects:
{ business_category: 'EDUCATION',
    city: 'Brooklyn',
    distance: '0.4',
    franchise: '',
    geo_latitude: '40.695067',
    geo_longitude: '-73.996135',
    geo_match: 'S5',
    industry: 'CATHOLIC SCHOOL',
    lob: 'CATHOLIC SCHOOL',
    name: 'Altschool Inc',
    ob_id: '20732801',
    phone: '718-852-6069',
    primary: 'PRIMARY',
    state: 'NY',
    street: '84 Montague St',
    type: 'POI',
    unit: '0',
    zip_code: '11201' },

example: 
    let list = getRecreation('key', '-74.0', '40.7', 5)
    console.log(list[i].city)
*/ 
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const apiCall = (url, authKey, authValue, res) => {
    console.log(url)
    var request = new XMLHttpRequest();
    var getoutofhere;
    request.open('GET', url, /* async = */ false);
    request.setRequestHeader('accept', 'application/json')
    request.setRequestHeader(authKey, authValue)
    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            //console.log(request.responseText)
            getoutofhere =  JSON.parse(request.responseText)
            //console.log("in function"+getoutofhere)
        }
    }
    request.send();
    return getoutofhere;
}

const getRecreation = (authValue, latitude, longitude, searchDistance) => {
    let authKey='APIKey'; let LATITUDE=latitude; let LONGITUDE=longitude; let SEARCHDISTANCE=searchDistance;
    let url = 'https://search.onboard-apis.com/poisearch/v2.0.0/poi/point?Point=POINT('+LATITUDE+'%2C'+LONGITUDE+')&SearchDistance='+SEARCHDISTANCE+'&RecordLimit=10&BusinessCategory=ATTRACTIONS - RECREATION&Sort=DISTANCE'
    let res = null;
    let apiret = apiCall(url, authKey,authValue,null )

    list = apiret.response.result.package.item
    return list;
}

//test app.js
const request = require('request')

// const url = 'https://api.darksky.net/forecast/e55358a17ef7f91d7d15e374234878b5/40.7831,-73.9712'

// request({url:url, json:true}, (error,response) =>{
// 	console.log(response)
// 	console.log('The weather currently is', response.body.currently.summary,'.')
// 	console.log('The temperature is',response.body.currently.temperature)
// })

//const mapurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/new%20york.json?access_token=pk.eyJ1IjoicHRrMTYiLCJhIjoiY2p0M2t6Y3pwMHRtYTQ5bGxkamtrYnNpeiJ9.FPvR5kzUTigu74twJG-d-w'
const mapurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places?access_token=pk.eyJ1IjoicHRrMTYiLCJhIjoiY2p0M2t6Y3pwMHRtYTQ5bGxkamtrYnNpeiJ9.FPvR5kzUTigu74twJG-d-w'

request({url: mapurl, json:true},(error, response)=>{
	if(error){
		console.log('Cannot connect to server')
	} else if (response.body.message) {
		console.log('Invalid request, check input ',response.message)
	} else if (response.body.features.length == 0) {
		console.log('Invalid location, check input ',response.message)
	} else {
		//console.log(response.body.features[0])
		console.log('Location String',response.body.features[0].place_name)
		console.log('Coordinates',response.body.features[0].center)
	}
})
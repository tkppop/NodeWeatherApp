//test app.js
const request = require('request')

// const url = 'https://api.darksky.net/forecast/e55358a17ef7f91d7d15e374234878b5/40.7831,-73.9712'

// request({url:url, json:true}, (error,response) =>{
// 	console.log(response)
// 	console.log('The weather currently is', response.body.currently.summary,'.')
// 	console.log('The temperature is',response.body.currently.temperature)
// })

const mapurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/New%20york.json?access_token=pk.eyJ1IjoicHRrMTYiLCJhIjoiY2p0M2t6Y3pwMHRtYTQ5bGxkamtrYnNpeiJ9.FPvR5kzUTigu74twJG-d-w'

request({url: mapurl, json:true},(error, response)=>{
	console.log(response.body.features[0])
})
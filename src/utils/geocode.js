const request = require('request')

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibW9pc2VzMzExMyIsImEiOiJja3Y3bHlpZXk0YTduMndwNnp1ZzY5emQzIn0.rhLCwuGfNirQvoTRhc32eg&limit=1'

    request({url, json:true }, (error,{body})=>{
        if(error){
            callback('Unabled to connect to geo service!',undefined)
        }else if(body.features.length===0){
            callback('Unabled to find location!',undefined)
        }else{ 
            callback(undefined,{
                loc:body.features[0].place_name, 
                lat:body.features[0].center[0],
                lon:body.features[0].center[1]
            })
        }
    })
}

module.exports=geocode
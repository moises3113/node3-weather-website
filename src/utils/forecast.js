const request = require('request')

const forecast = (lat,lon,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=83182f40ebf5ae11b80132c8ae055794&query='+lon+','+lat

    request({url, json:true }, (error,{body})=>{
        if(error){
            callback('Unabled to connect to weather service!',undefined)
        }else if(body.error){
            callback('Unabled to find location!',undefined)
        }else{ 
            callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature+' degress out. It feels like '+body.current.feelslike+' degress out. The humidity is '+body.current.humidity+'%.')
        }
    })
}

module.exports=forecast
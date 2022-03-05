const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.argv)

const address = process.argv[2]

if (!address){
    return console.log('Please provide an address!')
}

geocode(address, (error, data)=>{
    if (error){
        return console.log(error)
    }
    forecast(data.Latitude, data.Longitude,(error, forecastData)=>{
        if(error){
            return console.log(error)
        }
        console.log(data.Location)
        console.log(forecastData)
    })
})


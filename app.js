const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.argv)

const address = process.argv[2]

if (!address){
    return console.log('Please provide an address!')
}

geocode(address, (error, {Latitude, Longitude, Location})=>{
    if (error){
        return console.log(error)
    }
    forecast(Latitude, Longitude,(error, forecastData)=>{
        if(error){
            return console.log(error)
        }
        console.log(Location)
        console.log(forecastData)
    })
})


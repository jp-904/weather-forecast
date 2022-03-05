const request = require('request');

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoianA5MDQiLCJhIjoiY2wwYm9wbnM5MGg1NDNvcjE3OGdsaXJhdCJ9.tPynb-7WQkx3kqtnl5z55A';
    setTimeout(()=>{
        request({url: url, json: true}, (err, resp)=>{
            if(err){
                callback('Network connection issue, please try again', undefined)
            } else if (resp.body.message){
                callback('Resource Not found', undefined)
            } else if(resp.body.features.length===0){
                callback('Can not get the resource', undefined)
            } 
            else{
                callback(undefined, {
                    'Latitude':resp.body.features[0].center[1],
                    'Longitude':resp.body.features[0].center[0],
                    'Location':resp.body.features[0].place_name
                })
            }
        })
    },0)
};

module.exports = geocode
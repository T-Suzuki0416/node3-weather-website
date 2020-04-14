const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidC1zdXp1a2kiLCJhIjoiY2s4czhodGRuMG12aDNnbzRqZTl1cTR3aiJ9.oe-MAyIRYBr2BXYU3s-Ebw&.imit=1';

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location servides!', undefined);
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;
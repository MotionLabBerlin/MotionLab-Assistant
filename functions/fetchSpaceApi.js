const request = require('request');

var fetchSpaceApi = (callback) => {
    request({
        url: 'https://spaceapi.motionlab.berlin',
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to fetch motion lab space api.');
            console.error(error);
        } else  {
            callback(undefined, {
                open: body.state.open,
                openMessage: body.state.message,
                url: body.url,
                //body: body
            });
        };
    });
};

module.exports.spaceApiResponse = fetchSpaceApi;
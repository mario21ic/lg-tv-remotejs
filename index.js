// How to request pairing key
const TvApi = require("node-lgtv-api");
const tvApi = new TvApi("192.168.0.5", "8080"); //for key request
tvApi.displayPairingKey().then(console.log, console.error);

/*
//How to authorize to your TV
const TvApi = require("node-lgtv-api");
const tvApi = new TvApi("192.168.0.5", "8080", "879540"); //for key request
tvApi.authenticate().then(console.log, console.error);
*/

tvApi.authenticate().then(() => 
    tvApi.processCommand(tvApi.TV_CMD_MUTE_TOGGLE, [])
        .then(console.log, console.error), 
    console.error);


tvApi.authenticate().then(() =>  
    tvApi.queryData(tvApi.TV_INFO_CHANNEL_LIST)
        .then(console.log, console.error), 
    console.error);


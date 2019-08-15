/*

https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=c7c92f78a10b96b8086988432a4f4cf5&artist=cher&track=believe&format=json

*/

function getTrackLength(artist, track) {

    const apiKey = "c7c92f78a10b96b8086988432a4f4cf5"; // my api key for last.fm audioscrobbler

    const queryURL = "https://ws.audioscrobbler.com/2.0/?method=track.getInfo" + "&api_key=" + apiKey + "&artist=" + artist + "&track=" + track + "&format=json"; // queryURL to be used in fetch 




    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (responseJson) {
        console.log(responseJson);  // console log json to check integrity
    });

}

getTrackLength("cher", "believe");
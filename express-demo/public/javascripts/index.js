// $.ajax({
//     url: 'https://api.neshan.org/v1/map-matching?path=36.299394,59.606211|36.297950,59.604258|36.297206,59.603507',
//     type: 'get',
//     data : {
//         key : 'web.N2p0OPRuBKwSFdptFFkgeEZZf95OMr4AtuBijsMV',
//     },
//     success : function (res) {
//         console.log(res)
//     }
// });

var currentLatitude = 35.699739;
var currentLongitude = 51.338097;

var myMap = new L.Map('map', {
    key: 'web.N2p0OPRuBKwSFdptFFkgeEZZf95OMr4AtuBijsMV',
    maptype: 'dreamy',
    poi: true,
    traffic: false,
    center: [currentLatitude, currentLongitude],
    zoom: 14
});

$('.js-my-location').on('click', function(){
    navigator.geolocation.getCurrentPosition(function(location) {
        currentLatitude = location.coords.latitude;
        currentLongitude = location.coords.longitude;
        var a = 35.77111692031879;
        var b = 51.42408974468709;
        myMap.setView([a.toFixed(6), b.toFixed(6)], 14);

    });
});


var data = [{lat: 35.699739, long: 51.338097}, {lat: 35.701139, long: 51.350107}, {lat: 35.504739, long: 51.33860}]

for(i of data){
    L.marker([i.lat, i.long]).addTo(myMap).bindPopup(`<b>inja: ${i.lat}</b><br>mask dare`).openPopup();
}

// marker.bindPopup(`<b>inja: ${currentLatitude}</b><br>mask dare`).openPopup();
// L.marker([35.692855, 51.324090]).bindLabel('Look revealing label!', { clickable: true }).addTo(myMap);
// newM = bindPopup(`<b>inja: 35.692855</b><br>mask dare`).openPopup();
// myMap.setView([35.699739, 51.338097], 13);

var add;
myMap.on('click', function(e) {
    if(add){
        myMap.removeLayer(add);
    }
    add = L.marker(e.latlng).addTo(myMap);
    $('#addNnewLocation').removeClass('f-hidden');
});
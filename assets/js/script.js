

// function to generate map pins
var sendToMap = function (){
    console.log("hello");
}

// //Adding TomTom Stuff

// // Define your product name and version.
// tt.setProductInfo('Codepen Examples', '${analytics.productVersion}');
// var map = tt.map({
//     key: 'ejoYhQhApDJfoTII6fG63l3BXF0tiaUV',
//     container: 'map',
//     style: 'tomtom://vector/1/basic-main',
//     dragPan: !isMobileOrTablet(),
//     center: [-99.98580752275456, 33.43211082128627],
//     zoom: 3
// });
// map.addControl(new tt.FullscreenControl());
// map.addControl(new tt.NavigationControl());
// function createMarker(icon, position, color, popupText) {
//     var markerElement = document.createElement('div');
//     markerElement.className = 'marker';
//     var markerContentElement = document.createElement('div');
//     markerContentElement.className = 'marker-content';
//     markerContentElement.style.backgroundColor = color;
//     markerElement.appendChild(markerContentElement);
//     var iconElement = document.createElement('div');
//     iconElement.className = 'marker-icon';
//     iconElement.style.backgroundImage =
//         'url(https://api.tomtom.com/maps-sdk-for-web/5.x/assets/images/' + icon + ')';
//     markerContentElement.appendChild(iconElement);
//     var popup = new tt.Popup({offset: 30}).setText(popupText);
//     // add marker to map
//     new tt.Marker({element: markerElement, anchor: 'bottom'})
//         .setLngLat(position)
//         .setPopup(popup)
//         .addTo(map);
// }
// createMarker('accident.colors-white.svg', [-120.72217631449985, 42.73919549715691], '#5327c3', 'SVG icon');
// createMarker('accident.colors-white.png', [-99.98580752275456, 33.43211082128627], '#c30b82', 'PNG icon');
// createMarker('accident.colors-white.jpg', [43.0731, 89.4012], '#c31a26', 'JPG icon');


// function to send api call to petfinder
var findPets = function() {
    // petfinder api call
    $.get()
    .then(function(response) {
        //function that generates pins
        sendtoMap();
    })


}

// capture entered city and state and animal type
var getLocation = function () {
    var city = $('#cityEntry').val().trim();
    var state = $('#stateDropDown').val();
    var pet = $('#animalDropDown').val();

    // if city and state entered
    if (city){
        console.log(city);
        cityEntry.value = "";

        // if entry field is left blank or if the city 
    } else {
        //need another option; she said no alerts
        alert("Please choose a city for more specific results");
    }

    // checking to see captured values
    console.log(city, state, pet);

    // send captured values to petfinder
    findPets();

}

//when submit button is clicked, send entered city and state to function to find pets
$("#submitBtn").click(function () {
    event.preventDefault();
    // function that captures city and state
    getLocation();
    
})

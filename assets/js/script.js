submitBtn = document.getElementById("submitBtn");
var cardContainerEl = document.getElementById("cardContainer");





// function that retrieves jobs that meet avg and location
//from indeed
var getPetfinderResults = function (animal, city, state) {

    console.log(state);

    //test to see what values are being sent here

    var key = "d9CrIalA9BqDadPoKDdacOdlOsPFm6UDYC00zRok4S5duTHiTQ"
    var secret = ""


    // set up api call to indeed.com using city and state 
    //from input
    fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: "grant_type=client_credentials&client_id=" + key + "&client_secret=" + secret,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        var token = data.access_token
        console.log(data);
        var proxyUrl = "https://cors-anywhere.herokuapp.com/"
        var endPoint = "https://api.petfinder.com/v2/animals?type=" + animal + "&location=" + city + ", " + state;
        fetch(proxyUrl + endPoint, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            //console.log(data);
            createAnimalCards(data.animals)
            getAddress(data.animals)
        })
    })
};


// function that captures input city and state
var submitFormHandler = function (event) {
    event.preventDefault();
    // capture text entered for city
    var animal = $('#animalDropDown').val().toLowerCase();
    var city = $('#cityEntry').val().trim().toLowerCase();
    // send city to api call

    // capture text entered for state
    var state = $('#stateDropDown').val().toLowerCase();
    // send state to api call
    getPetfinderResults(animal, city, state);

    // if city and state entered
    if (city) {
        console.log(city);
        cityEntry.value = "";

        // if entry field is left blank or if the city 
    } else {
        //need another option; she said no alerts
        alert("Please choose a city");
    }

    // create title divs for city and state
    // var location = document.createElement("h1");
    // location.innerHTML = city + ", " + state;
    // location.classList = "location-title";
    // document.getElementById("resultsContainer").appendChild(location);

};

function createAnimalCards(animals) {
    $('#cardContainer').empty();

    var animalArray = animals
    for (var i = 0; i <animalArray.length; i++) {
        var animalCardEl = document.createElement("li");
        $(animalCardEl).addClass("glide__slide");

        var animalNameEl = document.createElement("h3");
        animalNameEl.innerHTML = animalArray[i].name;
        animalCardEl.appendChild(animalNameEl);
        console.log(animalArray[i].name)

        cardContainerEl.appendChild(animalCardEl);
        
    }
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 3
    }).mount()
}

//Adding TomTom Stuff

// Define your product name and version.
tt.setProductInfo('Codepen Examples', '${analytics.productVersion}');
var map = tt.map({
    key: 'ejoYhQhApDJfoTII6fG63l3BXF0tiaUV',
    container: 'map',
    style: 'tomtom://vector/1/basic-main',
    dragPan: !isMobileOrTablet(),
    center: [-99.98580752275456, 33.43211082128627],
    zoom: 3
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());
function createMarker(icon, position, color, popupText) {
    var markerElement = document.createElement('div');
    markerElement.className = 'marker';
    var markerContentElement = document.createElement('div');
    markerContentElement.className = 'marker-content';
    markerContentElement.style.backgroundColor = color;
    markerElement.appendChild(markerContentElement);
    var iconElement = document.createElement('div');
    iconElement.className = 'marker-icon';
    iconElement.style.backgroundImage =
        'url(https://api.tomtom.com/maps-sdk-for-web/5.x/assets/images/' + icon + ')';
    markerContentElement.appendChild(iconElement);
    var popup = new tt.Popup({ offset: 30 }).setText(popupText);
    // add marker to map
    new tt.Marker({ element: markerElement, anchor: 'bottom' })
        .setLngLat(position)
        .setPopup(popup)
        .addTo(map);
}

// get data to put on the map
function getAddress(animals) {
    var animalArray = animals
    for (var i = 0; i <animalArray.length; i++) { 
        //get address
        var animalStreetAddress = animalArray[i].contact.address.address1;
        //make sure address isn't null
        if (!animalStreetAddress) {
            continue;
        }
        //get city
        var animalCity = animalArray[i].contact.address.city;
        //get state
        var animalState = animalArray[i].contact.address.state;
         //convert animalStreetAddress to fetch request format
        var splitAnimalStreetAddressArray = animalStreetAddress.split(" ");
        animalStreetAddress = splitAnimalStreetAddressArray.join("%20");
        var fetchAddress = animalStreetAddress + animalCity + '%20' + animalState;
        console.log(fetchAddress);
         //convert address to lat and long
    var tomKey = 'ejoYhQhApDJfoTII6fG63l3BXF0tiaUV'
    fetch('https://api.tomtom.com/search/2/geocode/' + fetchAddress + '.json?key=' + tomKey 
        ).then(function (response) {
            return response.json();

        }).then(function (data) {
        console.log(data)
        var lat = data.results[0].position.lat;
        var lon = data.results[0].position.lon;
        createMarker('accident.colors-white.svg', [lat, lon], '#5327c3', 'SVG icon');
        })
    }
}




//creating JS for carousel - disabling for now
// new Glide('.glide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 3
// }).mount()


// when user clicks submit btn, runs function for everything
submitBtn.addEventListener("click", submitFormHandler);


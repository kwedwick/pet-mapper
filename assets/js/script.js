submitBtn = document.getElementById("submitBtn");
var cardContainerEl = document.getElementById("cardContainer");


// function that retrieves jobs that meet avg and location
//from indeed
var getPetfinderResults = function (animal, city, state) {
    var error = document.getElementById("error")
    error.innerHTML= "";

    //test to see what values are being sent here

    var key = "d9CrIalA9BqDadPoKDdacOdlOsPFm6UDYC00zRok4S5duTHiTQ"
    var secret = "P4K1rCZ7k7dUDnwq2idKpeAqmMEEJ3tIkzywVyFj"


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
            if (response.ok) {
                return response.json();
            } else {
                error.innerHTML = "<span style='color: red;'>"+ 
                " Please enter a valid City</span>"  
            }
            
        }).then(function (data) {
            createAnimalCards(data.animals)
        })
    })
};


// function that captures input city and state
var submitFormHandler = function (event) {
    event.preventDefault();
    // capture text entered for city
    var animal = $('#animalDropDown').val().toLowerCase();
    var city = $('#cityEntry').val().trim().toLowerCase() //.split(" ").join("");
    console.log(city);
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
        error.innerHTML = "<span style='color: red;'>"+ 
                " Please enter a valid City</span>"  
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
    console.log(animalArray)

    for (var i = 0; i <animalArray.length; i++) {
        var animalCardEl = document.createElement("li");
        $(animalCardEl).addClass("glide__slide");

        var animalNameEl = document.createElement("h3");
        animalNameEl.innerHTML = animalArray[i].name;
        animalCardEl.appendChild(animalNameEl);

        if (animalArray[i].primary_photo_cropped === null) {

        var animalImgEl = document.createElement("p");
        animalImgEl.innerHTML = "No Photo Available"
        animalCardEl.appendChild(animalImgEl);

        } else if (animalArray[i].primary_photo_cropped !== null) {

        var animalImgEl = document.createElement("img");
        var animalPhoto = animalArray[i].primary_photo_cropped.small
        animalImgEl.setAttribute("src", animalPhoto)
        $(animalImgEl).addClass("animal-photo")
        animalCardEl.appendChild(animalImgEl);
        }
    

        var animalLocationEl = document.createElement("p");
        animalLocationEl.innerHTML = "Location: " + animalArray[i].contact.address.city + ", " + animalArray[i].contact.address.state;
        animalCardEl.appendChild(animalLocationEl);
        

        var animalBreedEl = document.createElement("p");
        animalBreedEl.innerHTML = "Primary Breed: " + animalArray[i].breeds.primary;
        animalCardEl.appendChild(animalBreedEl);

        var animalGenderEl = document.createElement("p");
        animalGenderEl.innerHTML = "Gender: " + animalArray[i].gender;
        animalCardEl.appendChild(animalGenderEl);
        
        var emailAddressEl = document.createElement("p");
        var emailLink = document.createElement("a");
        var email = animalArray[i].contact.email
        //console.log(email)
        emailAddressEl.innerHTML = "Email: ";
        emailLink.innerHTML = email;
        emailLink.setAttribute("href", "mailto:" + email);
        emailAddressEl.appendChild(emailLink);
        animalCardEl.appendChild(emailAddressEl);

        var petPetfinderUrlEl = document.createElement("a");
        //var petUrlLink = document.createElement("a")
        var petPageLink = animalArray[i].url;
        petPetfinderUrlEl.innerHTML = "Click to see more!";
        petPetfinderUrlEl.setAttribute("src", petPageLink);
        petPetfinderUrlEl.setAttribute("target", "_blank")
        petPetfinderUrlEl.setAttribute("href", petPageLink);
        animalCardEl.appendChild(petPetfinderUrlEl);

        // var animalOrgLocationEl = document.createElement("p");
        // animalOrgLocationEl.innerHTML = animalArray[i].organization;
        // animalCardEl.appendChild(animalOrgLocationEl);
       
        //appending card to carousel
        cardContainerEl.appendChild(animalCardEl);
        
    }
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 4
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
createMarker('accident.colors-white.svg', [-120.72217631449985, 42.73919549715691], '#5327c3', 'SVG icon');
createMarker('accident.colors-white.png', [-99.98580752275456, 33.43211082128627], '#c30b82', 'PNG icon');
createMarker('accident.colors-white.jpg', [-78.17043537427266, 36.31817544230164], '#c31a26', 'JPG icon');




//creating JS for carousel - disabling for now
// new Glide('.glide', {
//     type: 'carousel',
//     startAt: 0,
//     perView: 3
// }).mount()


// when user clicks submit btn, runs function for everything
submitBtn.addEventListener("click", submitFormHandler);

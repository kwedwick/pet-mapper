submitBtn = document.getElementById("submitBtn");
var city = $('#cityEntry').val().trim();
var state = $('#stateDropDown').val();




// function that retrieves jobs that meet avg and location
//from indeed
var getPetfinderResults = function (animal, city, state) {

    console.log(state);

    //test to see what values are being sent here

    var key = "d9CrIalA9BqDadPoKDdacOdlOsPFm6UDYC00zRok4S5duTHiTQ"
    var secret = "tR9LMFUA157fS4G2xAJYqCbGPjiGM7tw0Qi15sIc"


    // set up api call to indeed.com using city and state 
    //from input
    fetch("https://api.petfinder.com/v2/oauth2/token", {
        body: "grant_type=client_credentials&client_id=d9CrIalA9BqDadPoKDdacOdlOsPFm6UDYC00zRok4S5duTHiTQ&client_secret=tR9LMFUA157fS4G2xAJYqCbGPjiGM7tw0Qi15sIc",
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
            console.log(data);
        })
    })



    // console.log(response);

    // create a new div to hold each job posting result returned
    // var jobPost = document.createElement("div");
    // jobPost.innerHTML = "aspects we decide to pull from each post";
    // jobPost.classList = "job-post";
    // jobPost.id = "jobPost"
    // document.getElementById("jobList").appendChild(jobPost);

    // // create save button on the dynamically created job post
    // var saveJob = document.createElement("btn");
    // saveJob.innerHTML = "Save Job";
    // saveJob.classList = "save-btn";
    // saveJob.id = "save"
    // document.getElementById("jobPost").appendChild(saveJob);




    // if the city and state return does not exist, tell user
    //to try again


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
        'url(/Users/nicole.porter/Desktop/projects/wage-cost-comparison/assets/css/images/' + icon + ')';
    markerContentElement.appendChild(iconElement);
    var popup = new tt.Popup({ offset: 30 }).setText(popupText);
    // add marker to map
    new tt.Marker({ element: markerElement, anchor: 'bottom' })
        .setLngLat(position)
        .setPopup(popup)
        .addTo(map);
}
createMarker('sparrow-bird.svg', [-120.72217631449985, 42.73919549715691], '#5327c3', 'Name of Bird');
createMarker('cat-animal.svg', [-99.98580752275456, 33.43211082128627], '#c30b82', 'Name of cat');
createMarker('dog.svg', [-78.17043537427266, 36.31817544230164], '#c31a26', 'Name of Dog');

//for loop to cycle through result
var arrayForResults = ['Pet A', 'Pet B'];
var arrayLength = arrayForResults.length;
for (var i = 0; i < arrayLength; i++) {
    createMarker(icon, position, color, popupText);
    console.log(arrayForResults[i]);
};


//creating JS for carousel 
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3
  }).mount()



//creating JS for carousel 
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3
}).mount()


// when user clicks submit btn, runs function for everything
submitBtn.addEventListener("click", submitFormHandler);

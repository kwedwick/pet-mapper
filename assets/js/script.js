submitBtn = document.getElementById("submitBtn");
var city = $('#cityEntry').val().trim();
var state = $('#stateDropDown').val();


// function that retrieves jobs that meet avg and location
//from indeed
var getJobs = function() {

    //test to see what values are being sent here
    console.log(city);
    console.log(state);



    // set up api call to indeed.com using city and state 
    //from input
    // jobUrl = "https://api.indeed.com/ads/apisearch?publisher=123412341234123&l=" + city + "%2C+" + state + "&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2";
    
    // console.log(response);

    // create a new div to hold each job posting result returned
    var jobPost = document.createElement("div");
    jobPost.innerHTML = "aspects we decide to pull from each post";
    jobPost.classList = "job-post";
    jobPost.id = "jobPost"
    document.getElementById("jobList").appendChild(jobPost);

    // create save button on the dynamically created job post
    var saveJob = document.createElement("btn");
    saveJob.innerHTML = "Save Job";
    saveJob.classList = "save-btn";
    saveJob.id = "save"
    document.getElementById("jobPost").appendChild(saveJob);
    



    // if the city and state return does not exist, tell user
    //to try again

    
};


// function that captures input city and state
var submitCity = function(event) {
    // capture text entered for city
    var city = $('#cityEntry').val().trim();
    // send city to api call
    
   // capture text entered for state
    var state = $('#stateDropDown').val().toLowerCase();
    // send state to api call
    getWageInfo(state);

    // if city and state entered
    if (city){
        console.log(city);
        cityEntry.value = "";

        // if entry field is left blank or if the city 
    } else {
        //need another option; she said no alerts
        alert("Please choose a city");
    }

    // create title divs for city and state
    var location = document.createElement("h1");
    location.innerHTML = city + ", " + state;
    location.classList = "location-title";
    document.getElementById("resultsContainer").appendChild(location);

};

// function to use retrieve state avg income from bls.gov api
var getWageInfo = function(state) {
    // establish URL for api to return average income from bls.gov
    wageDataUrl = "	https://api.bls.gov/publicAPI/v2/timeseries/data/";
    
    // pass URL to fetch
    fetch(wageDataUrl)
    // handling the data
    .then(function(response){
        // return the average income value 
        response = "returned income avg value from the api";

        //test to see what value is returning
        console.log(response);

        // dynamically create new div to display the avg 
        var avBox = document.createElement("div");
        avBox.innerHTML = (response);
        avBox.classList = "avg-card";
        document.getElementById("resultsContainer").appendChild(avBox);

        // sends the averag information to Indeed
        getJobs();


    })
    
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
        'url(https://api.tomtom.com/maps-sdk-for-web/5.x/assets/images/' + icon + ')';
    markerContentElement.appendChild(iconElement);
    var popup = new tt.Popup({offset: 30}).setText(popupText);
    // add marker to map
    new tt.Marker({element: markerElement, anchor: 'bottom'})
        .setLngLat(position)
        .setPopup(popup)
        .addTo(map);
}
createMarker('accident.colors-white.svg', [-120.72217631449985, 42.73919549715691], '#5327c3', 'SVG icon');
createMarker('accident.colors-white.png', [-99.98580752275456, 33.43211082128627], '#c30b82', 'PNG icon');
createMarker('accident.colors-white.jpg', [-78.17043537427266, 36.31817544230164], '#c31a26', 'JPG icon');



// when user clicks submit btn, runs function for everything
submitBtn.addEventListener("click", submitCity);

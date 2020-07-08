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
    var jobPost = document.createElement("div")
    jobPost.innerHTML = "aspects we decide to pull from each post";
    jobPost.classList = "job-post";
    document.body.appendChild(jobPost);


    // if the city and state return does not exist, tell user
    //to try again

    
};


// function that captures input city and state
var submitCity = function(event) {
    // capture text entered for city
    var city = $('#cityEntry').val().trim();
    // send city to api call
    
   // capture text entered for state
    var state = $('#stateDropDown').val();
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


// when user clicks submit btn, runs function for everything
submitBtn.addEventListener("click", submitCity);
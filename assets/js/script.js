submitBtn = document.getElementById("submitBtn");



// function that captures input
var submitCityHandler = function(event) {
    //prevent page from refreshing
    event.preventDefault();
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

        
    } else { // if entry field is left blank

        //need another option; she said no alerts
        alert("Please choose a city");
    }

};

// function to use first api
var getWageInfo = function(state) {
    // establish URL
    wageDataUrl = "https://research.zippia.com/living-wage.html";
    
    // pass URL to fetch
    fetch(wageDataUrl)
    // handling the data
    .then(function(){
        // return the text value as an integer

    


    })
    
};
//  when user clicks on the div, it links to the job posting on indeed




// when user clicks submit btn, runs function
submitBtn.addEventListener("click", submitCityHandler);
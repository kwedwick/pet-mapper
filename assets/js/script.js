submitBtn = document.getElementById("submitBtn");



// function that captures input
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

        // if entry field is left blank
    } else {
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
    



// when user clicks submit btn, runs function
submitBtn.addEventListener("click", submitCity);
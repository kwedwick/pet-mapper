submitBtn = document.getElementById("submitBtn");

//

// function that captures input
var submitZip = function(event) {
    // capture text entered for city
    var zipCode = $('#zipCodeEntry').val().trim();
    // send city to api call

    // if city and state entered, clear field
    if (zipCode){
        
        // clear entry field
        zipCodeEntry.value = "";

        // if entry field is not a number
    } if (isNaN(zipCode)) {
        
        // prompt user to enter zip code
        zipCodeEntry.value = "Please enter a zipcode";
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
submitBtn.addEventListener("click", submitZip);
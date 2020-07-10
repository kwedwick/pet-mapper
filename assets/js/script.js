submitBtn = document.getElementById("submitBtn");

// function that captures input
var submitZip = function(event) {
    // capture text entered for city
    var zipCode = $('#zipCodeEntry').val().trim();
    // if zip code entered, clear field
    if (zipCode){
        // clear entry field
        zipCodeEntry.value = "";
        // if entry field is not a number
    } if (isNaN(zipCode)) {
        // prompt user to enter zip code
        zipCodeEntry.value = "Please enter a zipcode";
    } ;

    console.log(zipCode);
    // send zipcode' captured value to first Api call
    getJobs();
};

// function for first api call


//  when user clicks on the div, it links to the job posting on indeed

// when user clicks submit btn, runs function
submitBtn.addEventListener("click", submitZip);
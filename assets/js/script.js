submitBtn = document.getElementById("submitBtn");


//function for second API call
var getMap = function ( {

});
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
var getJobs =
    // zip code specific api url being used
    jobsUrl = 

    // fetch relevant posts
    fetch(jobsUrl);

    // create individual posts for each job posting returned
    then(response){
        //need for loop here to make it run for job posts 0-9

        //create divs
        var jobPost[i] = document.createElement("div");
        jobPost[i].id = "jobPosting" + [i];
        jobPost[i].className = "job-class";
        document.getElementsByName("results-container").appendChild(jobPost[i]);
        // also create a save button on each job posting
        document.getElementById = ("jobPosting" + [i]).createElement("btn");
        // send the address from each captured posting to second api call
        getMap();

    };

//  when user clicks on the div, it links to the job posting on indeed

// when user clicks submit btn, runs function
submitBtn.addEventListener("click", submitZip);
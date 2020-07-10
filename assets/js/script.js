submitBtn = document.getElementById("submitBtn");


//function for second API call
// var getMap = function ( {

// });
// // function that captures input
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
    getJobs(zipCode);
};

// function for first api call
function getJobs(){
    // zip code specific api url being used
    jobsUrl = "https://api.indeed.com/ads/apisearch?publisher=123412341234123&q=java+developer&l="+ zipCode;
    // fetch relevant posts
    fetch (jobsUrl)

    // create individual posts for each job posting returned
    .then(response => response.json())
    
    .then (function (data) {
    //  need for loop here to make it run for job posts 0-9
        console.log(data);

        // for loop start
        for (var i = 0; i < 10; i++){
        //create divs
        var jobPost = document.createElement("div");
        jobPost.id = "jobPosting" + i;
        jobPost.className = "job-class" + i;
        document.getElementById("results-container").appendChild(jobPost);
        
        // job title
        var jobTitle = document.createElement("h5");
        jobTitle.textContent = data.results[i].jobtitle;
        var jobCompany = document.createElement("h6");
        jobCompany.textContent = data.results[i].company;
        var jobLocation = document.createElement("h6");
        jobLocation.textContent = data.results[i].formattedLocation;
        
        // also create a save button on each job posting
        var jobButton = document.createElement("button");
        // text button
        jobButton.textContent = "save";
        jobPost.append(jobTitle, jobCompany, jobLocation, jobButton);

        // send the address from each captured posting to second api call
        
        getMap(data.results[i].latitude, data.results[i].longitude);
        };   

     });
};

//  when user clicks on the div, it links to the job posting on indeed

// when user clicks submit btn, runs function
submitBtn.addEventListener("click", submitZip);
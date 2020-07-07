//cost of living calc

// type in your city and state

// app uses existing cost of living calc website that searches by area code 

// app searches indeed for jobs in the area that are hiring that make more than
// what the average cost of living in an area is

// returns with job posts that meet minimum living standard requirements in zip
// code
-----


// //1st api call pulls in data on the living wage standard by state, and uses that 
// as the average for the 2nd api call
// --> goes to this link: https://livingwage.mit.edu/states/(+ number code they give each state)
// (we will have to make something declaring how to translate entered text for state from abrv to full
// name, and from name to abrv)
// and pulls the data shown in my screenshot; uses that to go to api call 2

----

// 2nd api call: use indeed to find jobs hiring in that area that use the num
// returned from first api call + info from the job postings to return postings that make that
// as minimum
// Link: ((https://www.indeed.com/jobs?l= + "city" + ,+ "+ state abrev" + &q=+ "+(cost of living from first api call)"
// (so, we will need to code for converting the state they enter to abrev for this api call

----
// dynamically creates div with the cost of living and appends to
// "results-container"

// dynamically generates divs that hold info for job postings from indeed
// that meet minimum cost of living standard wage; these show minimum details
// (wage and job title)

//  when user clicks on the div, it links to the job posting on indeed



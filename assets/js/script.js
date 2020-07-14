
// function to generate map pins
var sendToMap = function (){
    console.log("hello");
}

// capture entered city and state and animal type
var getLocation = function () {
    var city = $('#cityEntry').val().trim();
    var state = $('#stateDropDown').val();
    var pet = $('#animalDropDown').val();

    // if city and state entered
    if (city){
        console.log(city);
        cityEntry.value = "";

    //     // if entry field is left blank or if the city 
    } else {
        //need another option; she said no alerts
        alert("Please choose a city for more specific results");
    }

    // checking to see captured values
    console.log(city, state, pet);
    
      var pf = new petfinder.Client({
        apiKey: "d9CrIalA9BqDadPoKDdacOdlOsPFm6UDYC00zRok4S5duTHiTQ",
        secret: "tR9LMFUA157fS4G2xAJYqCbGPjiGM7tw0Qi15sIc",
      });
      
      var apiKey = "d9CrIalA9BqDadPoKDdacOdlOsPFm6UDYC00zRok4S5duTHiTQ";
      var type = pet;
      var petLocation = city, state;
      
      pf.animal
        .search({
          type: pet,
          //location: "11111",
          //limit: 100,
        })
        .then(function (response) {
          // Do something with `response.data.animals`
          console.log(response);
        })
        .catch(function (error) {
          // Handle the error
        });
      ;

}

//when submit button is clicked, send entered city and state to function to find pets
$("#submitBtn").click(function () {
    event.preventDefault();
    // function that captures city and state
    getLocation();
    
})

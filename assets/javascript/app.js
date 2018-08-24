$(document).ready(function () {
  //variables --------
  var topics = ["Dr. Bensen Honeydew", "Rizzo the Rat", "Scooter", "Statler and Waldorf", "Sweetums", "Lew Zealand", "The Moopets"];

  function getGiphy() {

    var muppet = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=umpnfYGGEaxrvpVX15blgnTvZzKpDwyL&q=" + muppet + "&limit=10&offset=0&rating=PG-13&lang=en"

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)

      // Creating a div to hold the movie
      var muppetDiv = $("<div class='muppet'>");

      // Storing the rating data
      var rating = response.Rated;

      // Creating an element to have the rating displayed
      var pOne = $("<p>").text("Rating: " + rating);

      // Displaying the rating
      muppetDiv.append(pOne);

      // Prepend Gifs to others
      $("#muppets-view").prepend(muppetDiv);
    });

  }

  //functions and Events
  function createBtn() {
    //Delete items inside the muppets-view div
    $("#buttons").empty();

    //For Loop to go through the topics array
    for (var i = 0; i < topics.length; i++) {
      //Dynamically create buttons 
      var x = $("<button>");
      x.addClass("muppet-btn");
      x.attr("data-name", topics[i]);
      x.text(topics[i]);
      $("#buttons").append(x);
      }
    }

  $("#add-muppet").on("click", function(event) {
    event.preventDefault();
    var muppet = $("#muppet-input").val().trim();
    topics.push(muppet);
    createBtn();
    });
  createBtn();
})

   /* var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=umpnfYGGEaxrvpVX15blgnTvZzKpDwyL&q=muppets&limit=10&offset=0&rating=PG-13&lang=en";

  $.ajax ({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
  }),
    //("#muppets-view").text(JSON.stringify(response));
    //$("#muppets-view").html("<h1> Muppet Name: " + response.Title);

  }),  
  
    createBtn() */
  //pseudocode ---

  /*
  Create a for loop that appends a button to each string of the array.

  On click of the button, 10 images should appear on the screen. 
  Create a search input that creates a search of Giphy API 
  Have the query return 10 images relating to the search and the rating of the image. 
  The gifs should appear in pause position.  
  When clicked the gif needs to animate. */
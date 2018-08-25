$(document).ready(function () {
  //variables --------
  var topics = ["Dr. Bensen Honeydew", "Rizzo the Rat", "Scooter", "Statler and Waldorf", "Sweetums", "Lew Zealand", "The Moopets"];

  function getGiphy() {

    var muppet = $("#muppet-input");
    var queryURL ="https://api.giphy.com/v1/gifs/search?api_key=umpnfYGGEaxrvpVX15blgnTvZzKpDwyL&q=" + muppet + "&limit=10&offset=0&rating=G&lang=en";

    // AJAX call 
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;

        for (var j = 0; j < results.length; j++) {
          var gifDiv = $("<div class'item'>");
          
          var rating = results[j].rating;

          var p = $("<p>").text("Rated: " + rating);

          var muppetImage = $("<img>");
          muppetImage.attr("src", results[j].images.fixed_width.url);

          gifDiv.prepend(p);
          gifDiv.prepend(muppetImage);

          $("#muppets-view").prepend(gifDiv);
        }
      })
    }

      /*  // Creating a variable to hold the gif img URL
        var imageUrl = response.data.image_original_url;
        //Create a varible to create an img tag to hold the image
        var muppetImage = $("<img>");

        //Add attributes of src and alt to the image
          muppetImage.attr("src", imageUrl);
          muppetImage.attr("alt", muppet);

        //prepend images to muppets-view
        $("#muppets-view").prepend(muppetImage);
      }); */
  
      // Storing the rating data
     // var gifRating = response.data_rating;

      //  console.log(gifRating);

      // Creating an element to have the rating displayed
     // var pOne = $("<p>").text("Rating: " + gifRating);f

      // Displaying the rating
     // muppetDiv.append(pOne);

      // Prepend Gifs to others
    //  $("#muppets-view").prepend(muppetDiv);


  

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
    var muppetInput = $("#muppet-input").val().trim();
    topics.push(muppetInput);
    createBtn();
    });
  

  $(document).on("click", createBtn());
  $(document).on("click", ".muppet-btn", getGiphy());
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
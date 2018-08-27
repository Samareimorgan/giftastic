$(document).ready(function () {
  //global variables --------
  var topics = ["Dr. Bensen Honeydew", "Rizzo the Rat", "Scooter", "Statler and Waldorf", "Sweetums", "Lew Zealand", "Cookie Monster"];
  //Click Events
  $(document).on("click", createBtn());
  $(document).on("click", ".muppet-btn", function(event) {
    muppet = $(this).text();
    getGiphy();
    console.log(muppet);
  })


  //Functions---
  //Create giphy AJAX call function
  function getGiphy() {
    
    var queryURL ="https://api.giphy.com/v1/gifs/search?api_key=umpnfYGGEaxrvpVX15blgnTvZzKpDwyL&limit=10&q=" + muppet;
    console.log(muppet);
    // AJAX call 
    $.ajax({
      url: queryURL,
      method: "GET" 
    })
      .then(function(response) {
        //local variable for response data
        var results = response.data;
        console.log(response);
        //for loop to go through the response data array
        for (var j = 0; j < results.length; j++) {
          // Create div dynamically to hold image and text
          var gifDiv = $("<div>");
          // more local variables for the results needed: rating, text and image
          var rating = results[j].rating;

          var p = $("<p>").text("Rated: " + rating);
          //creating image tag dynamically with each image - and attributing the src to the image
          var muppetImage = $("<img>");
          muppetImage.attr("src", results[j].images.original_still.url);
          muppetImage.attr("data-animate", results[j].images.fixed_width.url);
          muppetImage.attr("data-still", results[j].images.original_still.url);
          muppetImage.attr("data-state","still");
          muppetImage.addClass("gif");
          muppetImage.attr("alt", muppet);
          //append the text and the image to the div created. 
          gifDiv.append(p);
          gifDiv.append(muppetImage);

          //append the div to the muppets-view id
          $("#muppets-view").append(gifDiv);
        }
      })
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
      x.attr("data-muppet", topics[i]);
      x.text(topics[i]);
      $("#buttons").append(x);
      }
    }
  // Add input from the muppet-input form to the topics array 
  $("#add-muppet").on("click", function(event) {
    event.preventDefault();
    var muppetInput = $("#muppet-input").val().trim();
    topics.push(muppetInput);
    createBtn();
    })
  
  $(document).on("click", ".gif",function() {
    console.log("word");
    var state = $(this).attr("data-state");
    console.log(state);
    if(state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else{
      $(this).attr("src",$(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  })

})
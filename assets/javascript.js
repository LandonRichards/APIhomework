 function addNewButton(){
    $("#addGif").on("click", function(){
    var animalget = $("#animal-input").val().trim();
    if (action == ""){
      return false; // added so user cannot add a blank button
    }
    actions.push(action);

    displayGifButtons();
    return false;
    console.log("#addGif")
    });
}




    //this is our button funciton
    $("button").on("click", function() {

      var animals = $(this).attr("data-animals");
      //creates the variable animals and sets it equal to whatever button is clicked
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animals + "&api_key=dc6zaTOxFJmzC&limit=10";
 //gets our query
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          //loops through verious gifs in results .lenght

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);
            //this writes html directly, allowing us to make a P, get rating, and then add some simple text

            var animalimage = $("<img>");
            //sets animals image equal to image in html
            animalimage.attr("src", results[i].images.fixed_height.url);
            //image if fixed_height wasn't in here. Chaos!

            gifDiv.prepend(p);
            gifDiv.prepend(animalimage);

            $("#gifs-appear-here").prepend(gifDiv);
            console.log("button")
          }
        });
    });
//not sure if im doing click animate right!
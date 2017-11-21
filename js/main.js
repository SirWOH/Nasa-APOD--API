var apiKey = "api_key=UGtXPeXRazFiX8WJIlnon5x8Npbz1qJugdRJq76h";
var apiUrl = "https://api.nasa.gov/planetary/apod?" + apiKey;
var apiDateUrl = "https://api.nasa.gov/planetary/apod?"



$.ajax({
  url: apiUrl,
  success: function(response){
    console.log(response)
  },
  error: function(r){
    console.log(r)
  }

});

$("#submitButton").on("click",function(){
  var date = $("input").val();

  console.log(date)



  $.get(apiDateUrl + "date="+date+ "&"+ apiKey, function(r){
    $("img").attr("src", r.hdurl)
  })

})

$(document).ready(function(){

//when user clicks submit-btn
var submitButton = $('#submit-btn');
submitButton.on('click', function(event){
//prevent submission
event.preventDefault();
//save user input in variable
var cityName = $('#city-type').val();
//if user enters NYC, New York, New York City
if (cityName == "NYC" || cityName == "New York" || cityName == "New York City"){
//change background to nyc.jpg
$('body').addClass('nyc');
}

else if (cityName == "SF" || cityName == "San Francisco" || cityName == "Bay Area" ) {
  $('body').addClass('sf')
}

else if (cityName == "Los Angeles" || cityName == "LA" || cityName == "LAX" ) {
  $('body').addClass('la')
}

else if (cityName == "Austin" || cityName == "ATX" ) {
  $('body').addClass('austin')
}

else if (cityName == "Sydney" || cityName == "SYD" ) {
  $('body').addClass('sydney')
}

else (){

}

});

});

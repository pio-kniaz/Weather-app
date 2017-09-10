
$( document ).ready(function() {
var date = moment().format("MMMM D");



var buton =$("#submit").on("click",function(event){
  event.preventDefault();




  var city=$('#search').val();




  $.ajax({
    method:'get',
    url:"http://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&APPID=a7e54fd0cdfb45c2645bb091f7ca1f5a",
    dataTypes:'json',
    success:function(data){
      console.log(data);
      call(data);
      $("#topwrap").slideDown();

      $("#next-day-weather").css("display","none");
      $("#next-day-weather").addClass("hide");


      $('.right').css("backgroundColor","#54bae6");


      switch (data.weather[0].main) {
        case 'Clouds':
        // console.log("chumru");
          $(".img-wrap").html('<i class="wi wi-day-cloudy icona"></i>');
          break;
          case 'Rain':
          // console.log("descz");
          $(".img-wrap").html('<i class="wi wi-day-rain icona"></i>');
          break;
            case 'Clear':
            // console.log("slonczeko");
            $(".img-wrap").html('<i class="wi wi-day-sunny icona"></i>');
          break;
            case 'Mist':
              $(".img-wrap").html('<i class="wi wi-fog icona"></i>')
          break;
          case 'Rain':
          $(".img-wrap").html('<i class="wi wi-rain icona"></i>')
            break;
          case 'Thunderstorm':
            $(".img-wrap").html('<i class="wi wi-thunderstorm icona"></i>')

            break;
        default:
      }
    },
    error:function(data){
      console.log("API KEY PROBLEM");
    }
  })
})


function call(data){

  $("#name").html(data.name);
  $('#weatehr-info').html(data.weather[0].description);
  $('#temp-api').html(Math.round(data.main.temp)+'&#8451;');
  $('#wind-api').html('<span> <i class="fa fa-flag" aria-hidden="true"></i> </span>'+data.wind.speed + 'km/h');
  $('#humidity-api').html('<span> <i class="fa fa-tint" aria-hidden="true"></i> </span>'+data.main.humidity+'%');
  $('#cloudiness').html('<span> <i class="wi wi-cloud icona"></i> </span>'+data.clouds.all+'%');
  $('.right').html(date);

}

});

var a=1;
$("#current-weather").on("click",function(){
  console.log("dupa");
  $("#next-day-weather").addClass("hiden");
  $("#topwrap").slideDown();
})
var button=document.querySelector("#change");
 button.addEventListener("click",function(){

   $("#topwrap").slideUp();
  //  $(".next-day-weather").slideToggle();
  $("#next-day-weather").css("display","flex");
  $("#next-day-weather").removeClass("hiden");




  var city1 = $("input").val();
  var date1 = moment().add(1, 'days').format("MMMM D");
  var date2 = moment().add(2, 'days').format("MMMM D");
  var date3 = moment().add(3, 'days').format("MMMM D");





  $.ajax({
    method:'get',
    url:"http://api.openweathermap.org/data/2.5/forecast/daily?q="+city1 +"&mode=json&units=metric&cnt=4&APPID=a7e54fd0cdfb45c2645bb091f7ca1f5a",
    dataTypes:'json',
    success:function(data){
      console.log(data);



      console.log(data.list[0].weather[0].main);
      console.log(data.list[1].weather[0].main);
      day1(data);
      day2(data);
      day3(data);

    },
    error:function(data){
      console.log("API KEY PROBLEM");
    }



  })
  function day1(data){
    $(".name-next-days").html(data.city.name);
    $('.temp-day1').html(Math.round(data.list[1].temp.day)+'&#8451;'+" /");
    $(".temp-night1").html((Math.round(data.list[1].temp.night)+'&#8451;'));
    $(".first-info").html(data.list[1].weather[0].description);
    $(".date-first").html(date1);
    // $("#humidity-api").html('<span> <i class="fa fa-tint" aria-hidden="true"></i> </span>'+data.list[0].humidity+'%');
    // $("#wind-api").html('<span> <i class="fa fa-flag" aria-hidden="true"></i> </span>'+data.list[0].speed + 'km/h');
    // $("#cloudiness").html('<span> <i class="wi wi-cloud icona"></i> </span>'+data.list[0].clouds+'%');


    switch (data.list[1].weather[0].main) {
      case 'Clouds':
      // console.log("chumru");
        $(".img-first-day").html('<i class="wi wi-day-cloudy icona"></i>');
        break;
        case 'Rain':
        // console.log("descz");
        $(".img-first-day").html('<i class="wi wi-day-rain icona"></i>');
        break;
          case 'Clear':
          // console.log("slonczeko");
          $(".img-first-day").html('<i class="wi wi-day-sunny icona"></i>');
          console.log("czyste niebo");
        break;
          case 'Mist':
            $(".img-first-day").html('<i class="wi wi-fog icona"></i>')
        break;
        case 'Rain':
        $(".img-first-day").html('<i class="wi wi-rain icona"></i>')
          break;
        case 'Thunderstorm':
          $(".img-first-day").html('<i class="wi wi-thunderstorm icona"></i>')
          break;
      default:
    }
  }

  function day2(data){
    $('.temp-day2').html(Math.round(data.list[2].temp.day)+'&#8451;'+" /");
    $(".temp-night2").html((Math.round(data.list[2].temp.night)+'&#8451;'));
    $(".second-info").html(data.list[2].weather[0].description);
    $(".date-second").html(date2);
    // $("#humidity-api").html('<span> <i class="fa fa-tint" aria-hidden="true"></i> </span>'+data.list[0].humidity+'%');
    // $("#wind-api").html('<span> <i class="fa fa-flag" aria-hidden="true"></i> </span>'+data.list[0].speed + 'km/h');
    // $("#cloudiness").html('<span> <i class="wi wi-cloud icona"></i> </span>'+data.list[0].clouds+'%');
    switch (data.list[2].weather[0].main) {
      case 'Clouds':
      // console.log("chumru");
        $(".img-second-dayy").html('<i class="wi wi-day-cloudy icona"></i>');
        break;
        case 'Rain':
        // console.log("descz");
        $(".img-second-day").html('<i class="wi wi-day-rain icona"></i>');
        break;
          case 'Clear':
          // console.log("slonczeko");
          $(".img-second-day").html('<i class="wi wi-day-sunny icona"></i>');
          console.log("czyste niebo");
        break;
          case 'Mist':
            $(".img-second-day").html('<i class="wi wi-fog icona"></i>')
        break;
        case 'Rain':
        $(".img-second-day").html('<i class="wi wi-rain icona"></i>')
          break;
        case 'Thunderstorm':
          $(".img-second-day").html('<i class="wi wi-thunderstorm icona"></i>')
          break;
      default:
    }
  }

  function day3(data){

    $('.temp-day3').html(Math.round(data.list[3].temp.day)+'&#8451;'+" /");
    $(".temp-night3").html((Math.round(data.list[3].temp.night)+'&#8451;'));
    $(".third-info").html(data.list[3].weather[0].description);
    $(".date-third").html(date3);
    // $("#humidity-api").html('<span> <i class="fa fa-tint" aria-hidden="true"></i> </span>'+data.list[0].humidity+'%');
    // $("#wind-api").html('<span> <i class="fa fa-flag" aria-hidden="true"></i> </span>'+data.list[0].speed + 'km/h');
    // $("#cloudiness").html('<span> <i class="wi wi-cloud icona"></i> </span>'+data.list[0].clouds+'%');
    switch (data.list[3].weather[0].main) {
      case 'Clouds':
      // console.log("chumru");
        $(".img-third-dayy").html('<i class="wi wi-day-cloudy icona"></i>');
        break;
        case 'Rain':
        // console.log("descz");
        $(".img-third-day").html('<i class="wi wi-day-rain icona"></i>');
        break;
          case 'Clear':
          // console.log("slonczeko");
          $(".img-third-day").html('<i class="wi wi-day-sunny icona"></i>');
          console.log("czyste niebo");
        break;
          case 'Mist':
            $(".img-third-day").html('<i class="wi wi-fog icona"></i>')
        break;
        case 'Rain':
        $(".img-third-day").html('<i class="wi wi-rain icona"></i>')
          break;
        case 'Thunderstorm':
          $(".img-third-day").html('<i class="wi wi-thunderstorm icona"></i>')
          break;
      default:
    }
  }

})

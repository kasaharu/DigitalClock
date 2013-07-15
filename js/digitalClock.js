addEventListener("load", function(){
  setInterval(function(){
      var currentTime = new Date();
      var hour = "0"+currentTime.getHours();
      var min  = "0"+currentTime.getMinutes();
      var sec  = "0"+currentTime.getSeconds();
      hour = hour.substr(hour.length-2, 2);
      min  = min.substr(min.length-2, 2);
      sec  = sec.substr(sec.length-2, 2);
      var timeString = hour+"c"+min+"c"+sec;
      var timeImage  = "";
      for(var i=0; i<timeString.length; i++){
          timeImage += '<img src="images/'+timeString.charAt(i)+'.png">';
      }
      document.getElementById("clock").innerHTML = timeImage;
  }, 1000);
}, true);



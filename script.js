var expectedDate = new Date("Mar 12, 2020 15:00:00").getTime();

var tickTock = setInterval(function() {
  var currentDate = new Date().getTime();
  var timeDistance = expectedDate - currentDate;

  var days = Math.floor(timeDistance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor(timeDistance % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(timeDistance % (1000 * 60) / (1000));

  document.getElementById('countdown-hours').innerHTML = hours;
  document.getElementById('countdown-minutes').innerHTML = mins;
  document.getElementById('countdown-seconds').innerHTML = seconds; 

  if (timeDistance < 0) {
    clearInterval(tickTock);
    document.getElementById('countdown').innerHTML = "expired";
  }

}, 1000);

$('#reset').on('click', clickHandlerReset)
$('#start').on('click', clickHandlerStart)
$('#pause').on('click', clickHandlerPause)

var timer = {
  var seconds = 0,
    timerId;

  function updateTime() {
    seconds += 1;
    console.log(seconds);
    $('#timer').text(seconds);
  }

  function clickHandlerStart() {
    timerId = window.setInterval(updateTime, 1000);
  }

  // Stop -- but do not reset! -- the timer using clearInterval().
  function clickHandlerPause() {
    window.clearInterval(timerId);
  }

  function clickHandlerReset() {
    window.clearInterval(timerId);
    seconds = 0;
    $('#timer').text('Stop Watch');
  }

}

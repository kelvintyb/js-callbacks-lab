var timer = {
  seconds: 0,
  timerId: undefined,

  initClicks: function() {
    $('#reset').on('click', timer.setResetClick);
    $('#start').on('click', timer.setStartClick);
    $('#pause').on('click', timer.setPauseClick);
  },

  setStartClick: function() {
    timer.timerId = window.setInterval(timer.updateTime, 1000);
  },
  setPauseClick: function() {
    window.clearInterval(timer.timerId);
  },
  setResetClick: function() {
    window.clearInterval(timer.timerId);
    timer.seconds = 0;
    $('#timer').text('Stop Watch');
  },
  updateTime: function() {
    timer.seconds += 1;
    console.log(timer.seconds);
    $('#timer').text(timer.seconds);
  }
}

timer.initClicks();

//should try to implement with bind or apply/call, instead of calling the main timer object repeatedly

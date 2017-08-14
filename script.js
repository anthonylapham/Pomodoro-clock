$(document).ready(function() {

  var breakTimerId = null;
  var workTimerId = null;

  var defaultWorkDurationMinute = 25;
  var defaultWorkDurationSecond = 0;
  var defaultBreakDurationMinute = 5;
  var defaultBreakDurationSecond = 0;

  var workMinute = defaultWorkDurationMinute.toString();
  var workSecond = defaultWorkDurationSecond ? defaultWorkDurationSecond.toString() : '00';
  var breakMinute = defaultBreakDurationMinute.toString();
  var breakSecond = defaultBreakDurationSecond ? defaultBreakDurationSecond.toString() : '00';

  $('#reset').hide()//hides the reset button on page load

  function hideButtons(override = false) {
    override ? $('#start-break').show() : $('#start-break').hide();
    override ? $('#start-work').show() : $('#start-work').hide();
    override ? $('#increase-session').show() : $('#increase-session').hide();
    override ? $('#decrease-session').show() : $('#decrease-session').hide();
    override ? $('#increase-break').show() : $('#increase-break').hide();
    override ? $('#decrease-break').show() : $('#decrease-break').hide();
    override ? $('#reset').hide() : $('#reset').show();
  }
  //function ensures that if the timer is active, only the reset button is visible
  //if timer is inactive then all buttons except the reset are visible
  $('#increase-session').on('click', function() {
    defaultWorkDurationMinute++
    workMinute = defaultWorkDurationMinute.toString();

    var increaseMinute = $('#startMinute').text()
    increaseMinute = parseInt(increaseMinute, 10);
    increaseMinute++
    increaseMinute.toString()
    $('#startMinute').text(increaseMinute);
  });
  //increments the work timer
  $('#decrease-session').on('click', function() {
    defaultWorkDurationMinute--
    workMinute = defaultWorkDurationMinute.toString();

    var decreaseMinute = $('#startMinute').text()
    decreaseMinute = parseInt(decreaseMinute, 10);
    decreaseMinute--
    decreaseMinute.toString();
    $('#startMinute').text(decreaseMinute);
  });
  //decrements the work timer
  $('#increase-break').on('click', function() {
    defaultBreakDurationMinute++
    breakMinute = defaultBreakDurationMinute.toString();

    var increaseBreak = $('#startBreak').text();
    increaseBreak = parseInt(increaseBreak, 10);
    increaseBreak++
    increaseBreak.toString();
    $('#startBreak').text(increaseBreak);
  });
  //increments the break timer
  $('#decrease-break').on('click', function() {
    defaultBreakDurationMinute--
    breakMinute = defaultBreakDurationMinute.toString();

    var decreaseBreak = $('#startBreak').text();
    decreaseBreak = parseInt(decreaseBreak, 10);
    decreaseBreak--
    decreaseBreak.toString();
    $('#startBreak').text(decreaseBreak);
  });
  //decrements the break timer
  $('#start-work').on('click', function() {
    hideButtons();

    $('#clock').text(workMinute + ':' + workSecond)

    workTimerId = setInterval(function() {
      if (defaultWorkDurationSecond === 0) {
        defaultWorkDurationSecond = 59;
        defaultWorkDurationMinute -= 1;
      } else {
        defaultWorkDurationSecond -= 1;
      }
      workMinute = defaultWorkDurationMinute.toString()
      workSecond = defaultWorkDurationSecond ? defaultWorkDurationSecond.toString() : '00'
      $('#clock').text(workMinute + ':' + workSecond)

      if (!defaultWorkDurationMinute && !defaultWorkDurationSecond) {
        defaultWorkDurationMinute = 25;
        defaultWorkDurationSecond = 0;
        clearInterval(workTimerId);
      }
    }, 1000);
  });
  //starts the 25 minute timer
  $('#start-break').on('click', function() {
    hideButtons();

    $('#clock').text(breakMinute + ':' + breakSecond)

    breakTimerId = setInterval(function() {
      if (defaultBreakDurationSecond === 0) {
        defaultBreakDurationSecond = 59;
        defaultBreakDurationMinute -= 1;
      } else {
        defaultBreakDurationSecond -= 1;
      }
      breakMinute = defaultBreakDurationMinute.toString();
      breakSecond = defaultBreakDurationSecond ? defaultBreakDurationSecond.toString() : '00';
      $('#clock').text(breakMinute + ':' + breakSecond)

      if (!defaultBreakDurationMinute && !defaultBreakDurationSecond) {
        defaultBreakDurationMinute = 5;
        defaultBreakDurationSecond = 0;
        clearInterval(breakTimerId);
      }
    }, 1000);
  });
  //starts the 5 minute timer
  $('#reset').on('click', function() {
    hideButtons(true);
    $('#clock').text('0:00');
    $('#startMinute').text('25');
    $('#startBreak').text('5');
    clearInterval(workTimerId);
    clearInterval(breakTimerId);
    defaultWorkDurationMinute = 25;
    defaultWorkDurationSecond = 0;
    defaultBreakDurationMinute = 5;
    defaultBreakDurationSecond = 0;
    workMinute = defaultWorkDurationMinute.toString();
    workSecond = defaultWorkDurationSecond ? defaultWorkDurationSecond.toString() : '00';
    breakMinute = defaultBreakDurationMinute.toString();
    breakSecond = defaultBreakDurationSecond ? defaultBreakDurationSecond.toString() : '00';


  });
  //returns everything to intial settings
});

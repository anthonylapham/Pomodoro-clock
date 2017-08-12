$(document).ready(function(){

  var defaultWorkDurationMinute = 25;
  var defaultWorkDurationSecond = 0;
  var defaultBreakDurationMinute = 5;
  var defaultBreakDurationSecond = 0;

  var workMinute = defaultWorkDurationMinute.toString();
  var workSecond = defaultWorkDurationSecond ? defaultWorkDurationSecond.toString() : '00';
  var breakMinute = defaultBreakDurationSecond.toString();
  var breakSecond = defaultBreakDurationSecond ? defaultBreakDurationSecond.toString() : '00';

  $('#start-work').on('click', function() {
    $('#clock').text(workMinute + ':' + workSecond)
    var workTimerId = setInterval(function() {
      if(defaultWorkDurationSecond === 0) {
        defaultWorkDurationSecond = 59;
        defaultWorkDurationMinute -= 1;
      }
      else {
        defaultWorkDurationSecond -= 1;
      }
      workMinute = defaultWorkDurationMinute.toString()
      workSecond = defaultWorkDurationSecond ? defaultWorkDurationSecond.toString() : '00'
      $('#clock').text(workMinute + ':' + workSecond)

      if(!defaultWorkDurationMinute && !defaultWorkDurationSecond) {
        defaultWorkDurationMinute = 25;
        defaultWorkDurationSecond = 0;
        clearInterval(workTimerId);
      }
    }, 1000);
  });

  $('#start-break').on('click', function() {
    $('#clock').text(breakMinute + ':' + breakSecond)
    var breakTimerId = setInterval(function() {
      if(defaultBreakDurationSecond === 0){
        defaultBreakDurationSecond = 59;
        defaultBreakDurationMinute -= 1;
      }
      else{
        defaultBreakDurationSecond -= 1;
      }
      breakMinute = defaultBreakDurationSecond.toString();
      breakSecond = defaultBreakDurationSecond ? defaultBreakDurationSecond.toString() : '00';
      $('#clock').text(breakMinute + ':' + breakSecond)

      if(!defaultBreakDurationMinute && !defaultBreakDurationSecond){
        defaultBreakDurationMinute = 5;
        defaultBreakDurationSecond = 0;
        clearInterval(breakTimerId);
      }
    }, 1000);
  });

  $('#reset').on('click', function(){
    // TODO: This only momentarily changes the text of the clock. Reset variables as well
    $('#clock').text('0:00');
  });

});

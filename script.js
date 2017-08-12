$(document).ready(function() {

  // DEV NOTE: Using ES6 syntax, so use in a modern browser.
  const DEFAULT_TIME_SETTINGS = {
    defaultWorkDurationMinute: 25,
    defaultWorkDurationSecond: 0,
    defaultBreakDurationMinute: 5,
    defaultBreakDurationSecond: 0,
    workMinute() {
      return this.defaultWorkDurationMinute.toString()
    },
    workSecond() {
      return this.defaultWorkDurationSecond ? this.defaultWorkDurationSecond.toString() : '00'
    },
    breakMinute() {
      return this.defaultBreakDurationMinute.toString()
    },
    breakSecond() {
      return this.defaultBreakDurationSecond ? this.defaultBreakDurationSecond.toString() : '00';
    }
  }

  $('#start-work').on('click', function() {
    // Always start with a clean slate by recursively cloning the defaults
    let clock = _.cloneDeep(DEFAULT_TIME_SETTINGS)

    $('#clock').text(clock.workMinute() + ':' + clock.workSecond())
    var workTimerId = setInterval(function() {
      if(clock.defaultWorkDurationSecond === 0) {
        clock.defaultWorkDurationSecond = 59;
        clock.defaultWorkDurationMinute -= 1;
      }
      else {
        clock.defaultWorkDurationSecond -= 1;
      }
      $('#clock').text(clock.workMinute() + ':' + clock.workSecond())

      if(!clock.defaultWorkDurationMinute && !clock.defaultWorkDurationSecond) {
        clearInterval(workTimerId);
      }
    }, 1000);
  });

  $('#start-break').on('click', function() {
    let clock = _.cloneDeep(DEFAULT_TIME_SETTINGS)

    $('#clock').text(clock.breakMinute() + ':' + clock.breakSecond())

    var breakTimerId = setInterval(function() {
      if(clock.defaultBreakDurationSecond === 0){
        clock.defaultBreakDurationSecond = 59;
        clock.defaultBreakDurationMinute -= 1;
      }
      else{
        clock.defaultBreakDurationSecond -= 1;
      }
      $('#clock').text(clock.breakMinute() + ':' + clock.breakSecond())

      if(!clock.defaultBreakDurationMinute && !clock.defaultBreakDurationSecond){
        clearInterval(breakTimerId);
      }
    }, 1000);
  });

  $('#reset').on('click', function(){
    // TODO: This only momentarily changes the text of the clock. Reset variables as well
    $('#clock').text('0:00');
  });

});

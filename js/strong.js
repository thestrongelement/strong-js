var countdown = require('countdown');

var model = {
  init: function() {
    
    console.log('model reporting: go!');
  },
  currentDate: new Date,
  eventDate: new Date(2056,10.05)
}

var helper = {
  dateDiff: function() {
    return countdown(model.currentDate, model.eventDate);
    
  }
  
}

var view = {
  init: function() {
    view.showCountdown();
    console.log('view reporting: go!');
  },
  showCountdown: function() {
    var diff = helper.dateDiff();

    document.querySelector('#years').innerHTML = diff.years;
    document.querySelector('#months').innerHTML = diff.months;
    document.querySelector('#days').innerHTML = diff.days;
  }
  
}

var app = {
  init: function() {

    model.init();
    view.init();
    console.log('app reporting: go!');
  }
  
}

app.init();



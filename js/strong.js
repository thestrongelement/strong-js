

var model = {
  init: function() {
    
    console.log('model reporting: go!')
  }
}

var helper = {
  
  
}

var view = {
  init: function() {
    
    console.log('view reporting: go!')
  }
  
}

var app = {
  init: function() {

    model.init();
    view.init();
    console.log('app reporting: go!')
  }
  
}

app.init();



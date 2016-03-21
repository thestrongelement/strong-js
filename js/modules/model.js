var request = require('superagent');

var model = module.exports = {
  init: function() {
    model.getData();
  },
  currentDate: new Date(),
  eventDate: new Date(2056,10.05),
  menuItem: {
    tile: null,
    count: null,
    id: null
  },
  
  menu: {},
  
  getData: function() {
    request.get('/api/menu.json',function(err,res) {
      model.menu = JSON.parse(res.text).menuItems;
    });
    
  }
};

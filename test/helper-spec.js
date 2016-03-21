var assert = require('assert');
var helper = require('../js/modules/helper.js');
var model = require('../js/modules/model.js');

model.menuItem = {
  "title": "Vestibulum",
  "count": 257,
  "id": 1
};

model.menu = [
  {
    "title": "Vestibulum",
    "count": 257,
    "id": 1
  },
  {
    "title": "Suspendisse",
    "count": 192,
    "id": 2
  }  
];
describe('Helper Tests', function() {
  describe('increment', function() {
    it('should increment the menu item', function() {
      helper.increment();
      assert.equal(model.menuItem.count, 258);
    })
  });
  
  describe('set current', function() {
    it('should set the current menu item', function () {
      helper.setCurrent(2);
      assert.equal(model.menuItem.id, 2);
    })
  });
  
  describe('get current', function() {
    it('should return the current menu item', function () {
      helper.setCurrent(1);
      helper.getCurrent();
      assert.equal(model.menuItem.id, 1);
      helper.setCurrent(2);
      helper.getCurrent();
      assert.equal(model.menuItem.id, 2);
    })
  });
  
})
'use strict';

beforeEach(function() {
  browser.driver.manage().window().setSize(800, 600);
});

var Homepage = function() {
  this.navbarName = element(by.className('title'));

  this.get = function() {
    browser.get('/');
  };
};

var Register = function() {
  this.get = function() {
    browser.get('/register');
  };
};

describe('homepage', function() {
  it('should have the hackedu name', function() {
    var homepage = new Homepage();
    homepage.get();

    expect(homepage.navbarName.getText()).toEqual('hackEDU');
  });
});

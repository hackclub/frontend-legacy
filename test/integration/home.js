'use strict';

var Homepage = function() {
  this.navbarName = element(by.className('title'));
  this.callToAction = element(by.className('call-to-action'));
  this.callToActionButton = element(by.linkText('Start a Hack Club'));

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

  describe('call to action', function() {
    it('should exist', function() {
      var homepage = new Homepage();
      homepage.get();

      expect(homepage.callToAction.getText()).toContain('Start a Hack Club');
    });

    it('should have a link to the apply page', function() {
      var homepage = new Homepage();
      homepage.get()

      homepage.callToActionButton.click();
      expect(browser.getCurrentUrl()).toContain('/apply');
    });
  });
});

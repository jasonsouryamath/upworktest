

var EC = protractor.ExpectedConditions;
//var home= require('../AngularJSTest/loginpage.js');
var sn = require('../UpWorkAngulartest/upwork_search input.js');
var af = require('../UpWorkAngulartest/advancedfilter.js');


describe("upwork page input",function() {
 beforeEach(function() {

	 browser.refresh;
	browser.get('https://www.upwork.com/');
	browser.driver.manage().window().maximize();
    console.log("Test is Beginning");
  });
 
 
it('search input UX Designer', function() {
	sn.query('UX Designer');
});

it('advanced search filter'), function() {
	af.advanced();
	af.clicknine();
	af.clickmoney();
};

});
 

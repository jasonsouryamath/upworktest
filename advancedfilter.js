/**
 * 
 */
var advanced_filter = function() {

this.clickweb = element(by.cssContainingText('.o-tag-skill o-tag-skill-lrg display-inline-block m-0-left m-xs-right m-0-top m-xs-bottom text-capitalize', 'web'));
this.percent = element(by.cssContainingText('span.ng-bind-html', '90% job success &amp;up'));
this.perhour =  element(by.cssContainingText('span.ng-bind-html','$60/hr and above'));





this.clicknine = function() {
this.ninety.click();
};

this.advanced = function() {
this.clickweb.click();	
};
this.clickmoney = function() {
	this.perhour.click();	
};
};
module.exports = new advanced_filter; 
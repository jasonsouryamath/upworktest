/**
 * 
 */
var advanced_filter = function() {

this.clickweb = element(by.cssContainingText('.o-tag-skill o-tag-skill-lrg display-inline-block m-0-left m-xs-right m-0-top m-xs-bottom text-capitalize', 'web'));


this.advanced = function() {
this.clickweb.click();	
};

};
module.exports = new advanced_filter; 
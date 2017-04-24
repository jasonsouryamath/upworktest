/**
 * 
 */
var search_input = function() {

this.searchinput = element(by.model('query'));	
	
	
this.query = function(value) {
this.searchinput.sendKeys(value); 		
this.searchinput.submit();
};

}
module.exports = new search_input; 
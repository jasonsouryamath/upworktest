// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['upworktest.js'],
 

  multiCapabilities: [
	   {'browserName': 'chrome'},
	   //{'browserName': 'chrome'},
	   //{'browserName': 'chrome'},
	   //{'browserName': 'chrome'},
	   //{'browserName': 'firefox'},
	   //{'browserName': 'phantomjs'}
	  ],

	  maxInstances:6

}
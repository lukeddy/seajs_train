define(function(require,exports,moudle){
	
    // var $ 			= require('./lib/jquery-1.10.2.min.js');
     var init2 = function(){
          $(function(){
		       alert($('h3:first').text());
		  });
	 }
	 
	 exports.init=init2;
	 
});
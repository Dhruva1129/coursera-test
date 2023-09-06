(function(window) {
	var Word = "Hello";
	var hello = function (name) {
		console.log(Word + " " + name);
	}

	window.hello = hello;

})(window);

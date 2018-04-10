'use strict';

/*jshint esversion:6,browser:true,devel: true*/
document.addEventListener('DOMContentLoaded', function () {
	var start = new Date();
	var canvas = document.querySelector('canvas');
	var ctx = canvas.getContext('2d');
	for (var x = 0; x < canvas.width; x++) {
		for (var y = 0; y < canvas.height; y++) {
			var R = Math.floor(Math.random() * 255) + 1;
			var G = Math.floor(Math.random() * 255) + 1;
			var B = Math.floor(Math.random() * 255) + 1;
			ctx.fillStyle = 'rgb(' + R + ', ' + G + ', ' + B + ')';
			ctx.fillRect(x, y, 1, 1);
		}
	}
	var end = new Date() - start;
	document.getElementById('ms').textContent = end + 'ms';
	document.getElementById('sec').textContent = end / 1000 + 's';
	document.getElementById('width').textContent = canvas.width;
	document.getElementById('height').textContent = canvas.height;
	document.getElementById('elements').textContent = canvas.width * canvas.height + ' elements';
});
//# sourceMappingURL=init.js.map
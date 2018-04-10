/*jshint esversion:6,browser:true,devel: true*/
document.addEventListener('DOMContentLoaded',function(){
	let start = new Date();
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	for(let x = 0; x < canvas.width; x++){
		for(let y = 0; y < canvas.height; y++){
			let R = Math.floor(Math.random() * 255) + 1;
			let G = Math.floor(Math.random() * 255) + 1;
			let B = Math.floor(Math.random() * 255) + 1;
			ctx.fillStyle = `rgb(${R}, ${G}, ${B})`;
			ctx.fillRect(x,y,1,1);
		}
	}
	let end = new Date() - start;
	document.getElementById('ms').textContent = `${end}ms`;
	document.getElementById('sec').textContent = `${end/1000}s`;
	document.getElementById('width').textContent = canvas.width;
	document.getElementById('height').textContent = canvas.height;
	document.getElementById('elements').textContent = `${canvas.width*canvas.height} elements`;
});
console.log('test')

document.getElementById('toggle').addEventListener('click',function(){
	var side = document.querySelector('.sidenav');
	var upper = document.querySelector('#upper');
	if (upper.className == 'b') {
		side.style.display = 'inline';
		upper.className = 'a';
		console.log('open');
	} else if (upper.className == 'a') {
		side.style.display = 'none';
		upper.className = 'b';
	}
});



submit.addEventListener('click', function () {
	var help = document.getElementById('help');
	var submit = document.getElementById('submit');
	var thankYou = document.getElementById('thankYou');
	window.alert('Thank you for your submission');
	location.reload();
});
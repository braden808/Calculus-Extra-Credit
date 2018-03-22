console.log('test')
document.getElementById('deriveWorksheet').addEventListener('click',function() {
	window.open('http://www.holland.wnyric.org/cms/lib/NY19000531/Centricity/Domain/129/Basic%20Integration%20Problems.pdf','_blank');
});

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
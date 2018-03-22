console.log('test')
document.getElementById('deriveWorksheet').addEventListener('click',function() {
	window.open('https://cdn.kutasoftware.com/Worksheets/Calc/03%20-%20Power%20Constant%20and%20Sum%20Rules.pdf','_blank');
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
console.log('test');

function derive() {
	console.log('derive');
}

// function getRandomElement(arr){
//     return arr[Math.floor(Math.random() * arr.length)];
//  }

  //Joke Arrays

  var questions = ['Why do they never serve beer at a math party?', 'Why wont Goldilocks drink a glass of water with 8 pieces of ice in it?','What is the first derivative of a cow?'];
  var answers = ['Because you can\'t drink and derive...','It\'s too cubed','Prime Rib!'];

  var random = Math.floor(Math.random() * questions.length);
  var show = document.getElementById('mathJokes');

//joke function


function joke() {
	var getQ = document.getElementById('question');
	getQ.innerText = questions[random];

	var getA = document.getElementById('answer');
	getA.innerText = 'ANSWER: ' + answers[random];
}

document.getElementById('getAnswer').addEventListener('click',function() {
	var getA = document.getElementById('answer');
	getA.style.display = 'inline';
})

joke();
//new joke
document.getElementById('newJoke').addEventListener('click',function() {

  	var random = Math.floor(Math.random() * questions.length);
  	var show = document.getElementById('mathJokes');

	var getA = document.getElementById('answer');
	getA.style.display = 'none';

	var getQ = document.getElementById('question');
	getQ.innerText = questions[random];

	var getA = document.getElementById('answer');
	getA.innerText = 'ANSWER: ' + answers[random];


});

document.getElementById('derive').addEventListener('click',function() {
	location.href = 'derive.html';
});

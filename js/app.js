console.log('test');

function derive() {
	console.log('derive');
}

// function getRandomElement(arr){
//     return arr[Math.floor(Math.random() * arr.length)];
//  }

  //Joke Arrays

  var questions = ['Why do they never serve beer at a math party?', 'Why wont Goldilocks drink a glass of water with 8 pieces of ice in it?','What is the first derivative of a cow?','What\'s the derivative of Amazon with respect to cost of shipping?', 'What did Al Gore play on his guitar?','Why was the parent function upset with its child?', 'Why is a calculus book always unhappy?', 'What is the integral of log cabin d cabin?']
  var answers = ['Because you can\'t drink and derive...','It\'s too cubed','Prime Rib!','Amazon Prime!','An Algorithim','It was stretched to its limit','Because it always has lots of problems','Log Cabin + sea = houseboat'];

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

document.getElementById('integrate').addEventListener('click',function() {
	location.href = 'integral.html';
});

document.getElementById('uSub').addEventListener('click',function() {
	location.href = 'uSub.html';
});

document.getElementById('deriveShort').addEventListener('click',function() {
	location.href = 'shortcut.html';
});

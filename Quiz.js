const chalk = require('chalk');

var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question(
	chalk.white.bold.bgBlue("What's your name? ")
);
console.log(chalk.green.bold('Hello, ' + userName + '..!!'));
console.log(chalk.white.bold.bgRedBright('Lets see how well you know me'));
// var highscore = [
//   {
//     name: "RX-100",
//     score:10
//   },
//   {
//     name: "PX-90",
//     score:9
//   },
//   {
//     name: "DS-80",
//     score:8
//   },
//   {
//     name: "RU-70",
//     score:7
//   },
//   {
//     name: "BT-60",
//     score:6
//   }
// ]
var questions = [
	{
		question:
			'What is my most liked food dish??\na:Halwa\nb:Pizza\nc:Biryani\nd:Pasta\n',
		answer: 'c'
	}
  ,
	{
		question:
			'What is my ideal holiday destination?  \na:Hampi\nb:Mysore\nc:Goa\nd:Ladakh\n',
		answer: 'd'
	},
	{
		question:
			'My favourite singer/band ?\na:Dishayein\nb:Linkin Park\nc:The yellow Diary\nd:Ritviz\n',
		answer: 'c'
	},
	{
		question:
			'What is my real passion ?\na:Photoshop\nb:Reading\nc:Biking\nd:Trekking\n',
		answer: 'c'
	},
	{
		question:
			'My ideal dream job ?\na:Programmer\nb:Graphic Designer\nc:Entreprenur\nd:Armed Forces\n',
		answer: 'd'
	},
	{
		question: 'Batman vs Iron man ?\na:Batman\nb:Iron Man\n',
		answer: 'a'
	},
	{
		question:
			'Am I fitness enthusiast ?\na:LOL\nb:Yes most definitely\nc:Seasonal fever\nd:only a dream\n',
		answer: 'c'
	},
	{
		question: 'Not a hobby ?\na:Singing\nb:Reading\nc:Exploring\nd:Cooking\n',
		answer: 'a'
	},
	{
		question:
			'My favourite sport ?\na:Cricket\nb:Basketball\nc:Kabbadi\nd:Football\n',
		answer: 'b'
	}
];

var level = 1,
	last_score = 0;

function play(question, answer) {
	var ans = readlineSync.question(chalk.cyanBright(question));
	last_score = score;
	if (ans === answer) {
		console.log(chalk.bold.green('right!'));
		score += 1;
	} else {
		console.log(chalk.bold.red('wrong!'));
		score -= 1;
	}

	if (score === 3 && last_score < 3) {
		++level;
		console.log(chalk.bold.black.bgYellowBright('Level Up...!!!'));
	} else if (score === 7 && last_score < 7) {
		++level;
		console.log(chalk.bold.black.bgYellowBright('Level Up...!!!'));
	} else if (score === 2 && last_score > 2) {
		--level;
		console.log(chalk.bold.white.bgRedBright('Level Down...!!!'));
	} else if (score === 6 && last_score > 6) {
		--level;
		console.log(chalk.bold.white.bgRedBright('Level Down...!!!'));
	} else {
		console.log('=========================');
	}

	console.log(chalk.bold.black.bgGreen('current score: ', score));
	console.log('=========================');
}

for (var i = 0; i < questions.length; i++) {
	var currentQuestion = questions[i];
	play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bold.white.bgBlue('Quiz is complete '));
console.log(chalk.bold.white.bgRed('Your score is ', score));
process.exit();
// for (var i = 0; i < highscore.length; i++) {
// 	var cur_user = highscore[i];
// 	if (cur_user.score < score) {
// 		console.log(chalk.green.bold.italic('YAY..!! You have broken the record '));
// 	}
// 	break;
// }

// console.log(chalk.red.bold.italic('High scores'));
// console.log(chalk.black.bold.bgGreen('Name       Score'));
// for (var i = 0; i < highscore.length; i++) {
// 	var cur_user = highscore[i];
// 	if (cur_user.score < score) {
// 		console.log(
// 			chalk.cyan.bold.italic(cur_user.name + '        ' + cur_user.score)
// 		);
// 	}
// }

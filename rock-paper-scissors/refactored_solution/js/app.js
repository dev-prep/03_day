console.log('connected')

var userChoice = prompt('What is your move?').toLowerCase()
console.log('You chose: ' + userChoice)

var options = ['rock', 'paper', 'scissors']

if (options.indexOf(userChoice) != -1) {
	
	var computerChoice = options[Math.floor(Math.random() * options.length)]

	console.log('Computer chose: ' + computerChoice)
	compare(userChoice, computerChoice)
} else {
	console.log('That is not a valid move!')
}

function compare(user, computer) {
	var message
	var a = options.indexOf(user)
	var b = options.indexOf(computer)

	if (a == b) {
		message = 'It is a tie'
	} else if ((a - b + 3) % 3 == 1) {
		message = 'User wins'
	} else {
		message = 'Computer wins'
	}

	console.log(message)
}

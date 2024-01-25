const items = ['Rock', 'Paper','Scissors']

const random = Math.floor(Math.random() * items.length);

function getComputerChoice(choice) {
  return console.log(choice) 
}

getComputerChoice(items[random])


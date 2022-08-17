// Change the Inner Text
var displayTurn = document.getElementById('turn')
var winner = document.getElementById('indicate')
var clearbtn = document.getElementById('clearbtn')
var items = document.getElementsByClassName('item')
var part2 = document.getElementsByClassName('part2')[0]
var part1 = document.getElementsByClassName('part1')[0]
var ask = document.getElementById('ask')
var music = new Audio('music.mp3')
var bgmusic = new Audio('bg-music.mp3')
var user1 = prompt('Please inter the First user name','guest1')
var user2 = prompt('Please inter the Second user name','guest2')
if (user1 === "" && user2 === "")
{
  set()
}else{
// var user1 = 'x'
// var user2 = 'y'
displayTurn.innerText = user1

// Main Variables
var turn
var a = [1]
var xyz
var array = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
]
var innertextc = (e) => {
  if (e.innerText === '') {
    if (a.length === 1) {
      turn = 'x'
      a.length++
      displayTurn.innerText = user2
      music.play()
      bgmusic.play()
    } else if (a.length !== 1) {
      bgmusic.play()
      music.play()
      turn = 0
      a.length--
      displayTurn.innerText = user1
    }
    e.innerText = turn
  }
  ask.innerText = ''

  // make array to get the result
  var results = () => {
    array.forEach((e) => {
      if (
        items[e[0]].innerText === items[e[1]].innerText &&
        items[e[0]].innerText === items[e[2]].innerText &&
        items[e[0]].innerText !== ''
      ) {
        displayTurn.innerText = ''
        if (items[e[0]].innerText === 'x') {
          if (xyz === user2) {
            xyz = user2
          } else {
            xyz = user1
          }
          winner.innerHTML = `<h1 class="text-danger">Winner=${xyz}</h1><b>${xyz} is the Winner</b></br>
          <button onclick="changeusername(this)" class="rounded m-3 px-3 py-2 " id="playbtn"><b>Set Name</b></button><button onclick="playagain()" class="rounded m-3 px-3 py-2 " id="playbtn"><b>Play Again</b></button>`
          clearbtn.style.display = 'none'
        } else if (items[e[0]].innerText === '0') {
          if (xyz === user1) {
            xyz = user1
          } else {
            xyz = user2
          }
          winner.innerHTML = `<h1 class="text-danger">Winner=${xyz}</h1><b>${xyz} is the Winner</b></br>
           <button onclick="changeusername(this)" class="rounded m-3 px-3 py-2 " id="playbtn"><b>Set Name</b></button><button onclick="playagain()" class="rounded m-3 px-3 py-2 " id="playbtn"><b>Play Again</b></button>`
          clearbtn.style.display = 'none'
        }
      }
    })
  }
  results()
}

// logic for play again
var playagain = () => {
  Array.from(items).forEach((e) => {
    e.innerText = ''
  })
  a = [1]
  winner.innerHTML = `<b>${
    xyz === undefined ? (xyz = 'Nobody') : xyz
  } won the last time</b></br>`
  displayTurn.innerText = user1
  clearbtn.style.display = 'block'
  xyz = ''
  displayTurn.innerText = user1
}

// logic for Display & Hide the HTML Elements
var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var setname = document.getElementById('setname')
changeusername = () => {
  if (part2.style.display !== 'none') {
    part2.style.display = 'none'
  }
  if (setname.style.display !== 'flex') {
    setname.style.display = 'block'
  }
}
// logic for changeusername
var set = () => {
  displayTurn.innerText = user1
  // for setname class
  if (setname.style.display === 'block') {
    setname.style.display = 'none'
  }
  // for part2 class
  if (part2.style.display !== 'block') {
    part2.style.display = 'block'
  }
  if (input1.value.length > 0 && input2.value.length > 0) {
    user1 = input1.value
    user2 = input2.value
    displayTurn.innerText = user1
    input1.value = ''
    input2.value = ''
    Array.from(items).forEach((e) => {
      e.innerText = ''
    })
    ask.innerText = 'Successfully Set'
  } else {
    ask.innerText = 'Please Insert The Information'
  }
  playagain()
}}

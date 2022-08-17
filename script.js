// Change the Inner Text
var displayTurn = document.getElementById('turn')
var winner = document.getElementById('indicate')
var items = document.getElementsByClassName('item')
var part2 = document.getElementsByClassName('part2')[0]
var part1 = document.getElementsByClassName('part1')[0]
var music = new Audio("music.mp3")
var bgmusic = new Audio("bg-music.mp3")
// var user1 = prompt('Please inter the First user name')
// var user2 = prompt('Please inter the Second user name')
var user1 = 'x'
var user2 = 'y'
displayTurn.innerText = user1

// Main Variables
var turn
var a = [1]
var xyz
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
      // bgmusic.play()
      turn = 0
      a.length--
      displayTurn.innerText = user1
    }
    e.innerText = turn
  }

  // make array to get the result
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
  // Target Every Element & Show the Results in new HTML Tag
  var results = () => {
    array.forEach((e) => {
      if (
        (items[e[0]].innerText === '0' &&
        items[e[1]].innerText === '0' &&
        items[e[2]].innerText === '0') ||
        (items[e[0]].innerText === 'x' &&
        items[e[1]].innerText === 'x' &&
        items[e[2]].innerText === 'x')
        ) {
          if (
          items[e[0]].innerText === '0' &&
          items[e[1]].innerText === '0' &&
          items[e[2]].innerText === '0'
        ) {
          xyz = user2
          winner.innerHTML = `<h1 class="text-danger">${xyz}</h1> <b>is the Winner</b></br>
          <button onclick="changeusername(this)" class="rounded m-3 px-3 py-2 " id="playbtn"><b>Set Name</b></button><button onclick="playagain()" class="rounded m-3 px-3 py-2" id="playbtn"><b>Play Again</b></button>`
          displayTurn.innerText = ''
        } else if (
          items[e[0]].innerText === 'x' &&
          items[e[1]].innerText === 'x' &&
          items[e[2]].innerText === 'x'
        ) {
          xyz = user1
          winner.innerHTML = `<h1 class="text-danger">${xyz}</h1><b> is the Winner</b></br>
          <button onclick="changeusername(this)" class="rounded m-3 px-3 py-2 " id="playbtn"><b>Set Name</b></button><button onclick="playagain()" class="rounded m-3 px-3 py-2 " id="playbtn"><b>Play Again</b></button>`
          displayTurn.innerText = ''
        }
      }
    })
  }
  results()
}

// logic for play again
playagain = () => {
  Array.from(items).forEach((e) => {
    e.innerText = ''
  })
  a = [1]
  winner.innerHTML = `<b>${xyz} won the last time</b></br>`
  displayTurn.innerText = xyz
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
set = () => {
  user1 = input1.value
  user2 = input2.value
  displayTurn.innerText = user1
  input1.value = ''
  input2.value = ''
  if (setname.style.display === 'block') {
    setname.style.display = 'none'
  }
  if (part2.style.display !== 'block') {
    part2.style.display = 'block'
  }
}

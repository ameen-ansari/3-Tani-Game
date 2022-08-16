// Change the Inner Text
var a = [1]
var displayTurn = document.getElementById('turn')
var items = document.getElementsByClassName('item')
displayTurn.innerText = 'x'
innertextc = (e) => {
  // console.log(items[0].innerText);
  var turn
  if (e.innerText === '') {
    if (a.length === 1) {
      turn = 'x'
      a.length++
      displayTurn.innerText = 0
    } else if (a.length !== 1) {
      turn = 0
      a.length--
      displayTurn.innerText = 'x'
    }
    e.innerText = turn
  }
  if (items[0].innerText == '') {
  } else if (
    items[0].innerText == 0 &&
    items[4].innerText == 0 &&
    items[8].innerText == 0
  ) {
    console.log(items[0].innerText)
  } else if (
    items[0].innerText == 0 &&
    items[3].innerText == 0 &&
    items[6].innerText == 0
  ) {
    console.log(items[0].innerText)
  } else if (
    items[0].innerText == 0 &&
    items[1].innerText == 0 &&
    items[2].innerText == 0
  ) {
    console.log(items[0].innerText)
  } else if (
    items[3].innerText == 0 &&
    items[4].innerText == 0 &&
    items[5].innerText == 0
  ) {
    console.log(items[0].innerText)
  } else if (
    items[6].innerText == 0 &&
    items[7].innerText == 0 &&
    items[8].innerText == 0
  ) {
    console.log(items[0].innerText)
  } else if (
    items[1].innerText == 0 &&
    items[4].innerText == 0 &&
    items[7].innerText == 0
  ) {
    console.log(items[0].innerText)
  } else if (
    items[2].innerText == 0 &&
    items[5].innerText == 0 &&
    items[8].innerText == 0
  ) {
    console.log(items[0].innerText)
  } else if (
    items[2].innerText == 0 &&
    items[6].innerText == 0 &&
    items[4].innerText == 0
  ) {
    console.log(items[0].innerText)
  }
}

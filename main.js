var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var choices = document.getElementById("choices")
var result = document.getElementById("result")
var total = document.getElementById("total")

var rockClass = document.getElementsByClassName("rock")
var paperClass = document.getElementsByClassName("paper")
var scissorsClass = document.getElementsByClassName("scissors")

// var use = 0
// var computer = 0


var user = {points:0, selection:"", name:'user'}
var comp = {points:0, selection:"", name:'comp'}
var choiceArr = ['rock','paper','scissors']

function play(e,user,comp,choiceArr){
  // debugger
  var winnerStr = ''
  var winner
  var IWon = 0
  user.selection = e.path[0].id
  // debugger
  comp.selection = choiceArr[Math.floor(Math.random() * choiceArr.length)]
  
  choices.innerHTML = "YOU: " + user.selection + "           Computer: " + comp.selection 
  // debugger
  if (user.selection == comp.selection) { 
    // By default IWon = 0
    //winnerStr = "DRAW!"
  } else {
    switch(user.selection) {
      case "rock":
        switch (comp.selection){
          case "paper":
            IWon = -1
            //winner = comp
            //winnerStr = "YOU LOST!"
            break
          case "scissors":
            IWon = 1
            //winnerStr = "YOU WON!"
            //winner = user
            break
        }
        break
      case "paper":
        switch (comp.selection) {
          case "rock":
            IWon = 1
            //winnerStr = "YOU WON!"
            //winner = user
            break
          case "scissors":
            IWon = -1
            //winnerStr = "YOU LOST!"
            //winner = comp
            break
        }
        break
      case "scissors":
        switch (comp.selection) {
          case "rock":
            IWon = -1
            //winnerStr = "YOU LOST!"
            //winner = comp
            break
          case "paper":
            IWon = 1
            //winnerStr = "YOU WON!"
            //winner = user
            break
        }
        break
    }
    // debugger
    //winner.points++  // only update points IF we have a winner
  }
  
  switch (IWon) {
    case -1:
      winnerStr = "You LOST!"
      comp.points++
      break
    case 0:
      winnerStr = "D R A W !"
      break
    case 1:
      winnerStr = "You WON!"
      user.points++
      break
  }
  result.innerHTML = winnerStr
  total.innerHTML = "YOU: " + user.points + "             Computer: " + comp.points 
} 





result.innerHTML = "Start the game by clicking on your choice"
rock.addEventListener("click", function(e){
  play(e,user,comp,choiceArr)
} )

paper.addEventListener("click", function(e){
  play(e,user,comp,choiceArr)
})

scissors.addEventListener("click",function(e){
  play(e,user,comp,choiceArr)
})

// Something wrong with the following. 'click' is not associated w/ class or s.th
/*
rockClass.addEventListener("click", function(e){
  play(e,user,comp,choiceArr)
} )

paperClass.addEventListener("click", function(e){
  play(e,user,comp,choiceArr)
})

scissorsClass.addEventListener("click",function(e){
  play(e,user,comp,choiceArr)
})

*/
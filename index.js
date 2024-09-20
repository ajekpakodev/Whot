/**
*@author Chisom Ukeh
*@copyright (c) 2024 Chisom Ukeh
*@github https://github.com/ajekpakodev/Whot
*@license MIT
*/




function Whot(totalPlayers = 2){
  this.drawPile = initCards();
  this.callCard = this.handleCallCard();
  this.playedCard = [];
  this.playersCards = new Array(totalPlayers);
  this.playersScores = new Array(totalPlayers);
  this.totalPlayers = totalPlayers;
  this.gameOver = false;
}


function Card(shape, figure){
  this.shape = shape;
  this.figure = figure;
}

function getRoundResult(winning_suit, suit1, number1, suit2, number2) {
  if (number1 == number2 && suit1 == suit2) {
    return "Draw";
  }
  if (suit1 == suit2) {
    if (number1 > number2) {
      return "Player 1 wins"
    } else {
      return "Player 2 wins"
    }
  }
  if (suit1 != winning_suit && suit2 != winning_suit) {
    if (number1 > number2) {
      return "Player 1 wins"
    } else if (number2 > number1) {
      return "Player 2 wins"
    } else {
      return "Draw"
    }
  }
  if (winning_suit == suit1) {
    return "Player 1 wins";
  }
  if (winning_suit == suit2) {
    return "Player 2 wins";
  }
  return "Draw";
}

function getRoundResult(winning_suit, suit1, number1, suit2, number2) {
  number1 == number2 && suit1 == suit2 ? "Draw" : (suit1 == suit2) "Player ";
}

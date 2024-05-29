const getMsg = (n) => `Player ${n} won!`;

const rockScissor = (n1, n2) => {
  if (n1 == "rock" && n2 == "scissors") {
    return getMsg(1);
  } else if (n1 == "scissors" && n2 == "rock") {
    return getMsg(2);
  }
};

const rockPaper = (n1, n2) => {
  if (n1 == "rock" && n2 == "scissors") {
    return getMsg(1);
  } else if (n1 == "scissors" && n2 == "rock") {
    return getMsg(2);
  }
};

const paperScissor = (n1, n2) => {
  if (n1 == "rock" && n2 == "scissors") {
    return getMsg(1);
  } else if (n1 == "scissors" && n2 == "rock") {
    return getMsg(2);
  }
};

const rps = (p1, p2) => {
  let cvtArr = [p1, p2];
  console.log(cvtArr);
};

console.log(rps("rock", "scissors"));

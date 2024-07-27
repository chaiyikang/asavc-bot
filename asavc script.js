let buttons;
let totalInitialButtons;

let findAnswers = function () {
  buttons = Array.from(
    document.getElementsByClassName("chakra-radio__input")
  ).splice(-20);
  totalInitialButtons = document.getElementsByClassName(
    "chakra-radio__input"
  ).length;
  for (let a = 0; a < 4; a++) {
    buttons[a].click();
    for (let b = 4; b < 8; b++) {
      buttons[b].click();
      for (let c = 8; c < 12; c++) {
        buttons[c].click();
        for (let d = 12; d < 16; d++) {
          buttons[d].click();
          for (let e = 16; e < 20; e++) {
            buttons[e].click();

            // check for next questions shown
            if (allCorrect()) {
              // alert('answers found')
              console.log(
                `Answers are: ${a + 1}, ${b - 3}, ${c - 7}, ${d - 11}, ${
                  e - 15
                }`
              );
              return;
            }
          }
        }
      }
    }
  }
};
// function allCorrect () {
//     if (document.getElementsByClassName('chakra-icon css-1ulehut').length === 1) {
//         return false;
//     } else {
//         return true;
//     }
// }

function allCorrect() {
  return document.getElementsByClassName("chakra-radio__input").length >
    totalInitialButtons
    ? true
    : false;
}

// function allCorrect() {
//   if (
//     document.getElementsByClassName("chakra-radio__input").length >
//     totalInitialButtons
//   ) {
//     // console.log(document.getElementsByClassName('chakra-radio__input'));
//     return true;
//   }
//   return false;
// }

//24324

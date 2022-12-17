// // const resultCell = document.querySelector(".result");
// // const resultBtn = document.querySelector("button");
// // const betCells = document.querySelectorAll(".bet");
// // const pointCells = document.querySelectorAll(".points");

// // resultBtn.onclick = handleResults;

// // function handleResults() {
// //   //  generate and show result
// //   const result = `${generate()} : ${generate()}`;
// //   resultCell.innerText = result;

// //   // watch for eachbet
// //   for (let i = 0; i < betCells.length; i++) {
// //     const cell = betCells[i];
// //     const bet = cell.innerText;

// //     // calculate points
// //     const points = calcPoints(resul, bet);
// //     pointCells[i].innerText = points;
// //   }
// // }

// // function generate() {
// //   // генеруємо рандомне число
// //   return Mat.floor(Math.random() * 10);
// // }

// // function calcPoints(result, bet) {
// //   if (result === bet) {
// //     return 5;
// //     const result = result.split(" : ");

// //     const bet = bet.split(" : ");

// //     if (Math.sign(result[0] - result[1]) === Math.sign(bet[0] - result[1])) {
// //       return 2;
// //     }
// //   }
// //   return 0;
// // }







// function multiply(j = prompt("Enter your first number", "2")) {

//   if (isNaN(j)) {
//     alert("Please, enter only numbers")
//   } else if (j === "0") {
//     alert("Please, do not enter zero")
//   } else {

//     let table = [];
//     let row = "";

//     for (let m = 1; m <= 10; m++) {
//       // row = i*m;
//       row += `${j} * ${m} = ${j * m}`;
//       // console.log(typeof(i));
//     }
//     table.push(row)
//     row = "";

//     // for (let i = j; i < j; i++) {
//     // }
//     // console.log(table);
//     alert(table);
//   }

// }

// multiply();

/*1.2 */
// function compare(a, b) {
//   let num;
//   if (a < b) {
//     num = -1;
//   } else if (a > b) {
//     num = 1;
//   } else if (a == b) {
//     num = 0;
//   } else {
//     num = NaN;
//   }
//   console.log(num);
//   return num;
// }

// compare(console.log, 2);

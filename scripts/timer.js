let minCount = Math.floor(initTime / 60);
let secCount = initTime % 60;
let outputTime = `${minCount} : ${
  secCount < 10 ? "0" + secCount : secCount
}`;
console.log(outputTime);
initTime--;
if (initTime === 0) {
  console.log("ding");
  // clearInterval(intervalID);
}
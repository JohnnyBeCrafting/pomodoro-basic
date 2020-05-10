function init() {
    // declare DOM variables here
    let clockOutput = document.getElementById("clock__output");
    let startBtn = document.getElementById("start");
    let stopBtn = document.getElementById("stop");
    let resetBtn = document.getElementById("reset");
    let initTime = 1500; 
    let initMsg = `Work for 25 minutes, then take a break for 5 minutes`;
    let numTimes = 0;
    let timerOn = false;
    function onload(){
        startBtn.disabled = true;
        numTimes++;
        let intervalID = setInterval(showTime, 1000);
        function showTime(){
            if(!timerOn){
                if(numTimes === 1){
                    console.log('there is a first time');
                    let minCount = Math.floor(initTime / 60);
                    let secCount = initTime % 60;
                    let outputTime = `${minCount} : ${secCount < 10 ? "0" + secCount : secCount}`;
                    clockOutput.textContent = outputTime;
                    document.title = outputTime;
                    initTime--;
                    if (initTime === 0) {
                        console.log("ding");
                        clearInterval(intervalID);
                    }
                }else{
                    console.log('not the first time');
                    let minCount = Math.floor(initTime / 60);
                    let secCount = initTime % 60; 
                    let outputTime = `${minCount} : ${secCount < 10 ? "0" + secCount : secCount}`;
                    document.title = outputTime;
                    clockOutput.textContent = outputTime;
                    initTime--;
                    if (initTime === 0) {
                        console.log("ding");
                        clearInterval(intervalID);
                    }
                }
            }
        }
        function stopTime(){
            startBtn.disabled = false;
            clearInterval(intervalID);
            console.log('stopped time', initTime);
        }
        function resetTime(){
            startBtn.disabled = false;
            clearInterval(intervalID);
            numTimes = 0;
            initTime = 1500;
            console.log('went back to', initTime);
            clockOutput.textContent = initMsg;
        }
        resetBtn.addEventListener('click', resetTime);
        stopBtn.addEventListener('click', stopTime);
    }
    startBtn.addEventListener('click', onload);
  }
  init();
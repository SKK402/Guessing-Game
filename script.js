let attempt = 0;
let attemptData = document.getElementById("Attempts");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");
let celebrateGif = document.getElementById("celebrateGif");

let cnum = Math.floor(Math.random() * 100) + 1;

function check() {
    let usernum = parseInt(userinp.value);

    if (!usernum || usernum < 1 || usernum > 100) {
        message.innerHTML =  `Invalid input! Enter a number between 1 and 100.`;
        message.className = "error";
        return;
    }

    if (cnum === usernum) {
        message.innerHTML = `<img src="https://static.vecteezy.com/system/resources/previews/002/714/124/original/businessman-cartoon-holding-golden-cup-with-isolated-white-background-young-business-man-success-concept-vector.jpg" alt="success"> Congratulations! You guessed the number.;`
        message.className = "success";

        // Show the GIF
        celebrateGif.style.display = "block";

        resBtn.style.display = "block";
    } else if (cnum < usernum) {
        message.innerHTML =  `You Went Too High.;`
        message.className = "error";
    } else {
        message.innerHTML =  `You Went Too Low.;`
        message.className = "error";
    }
    attempt++;
    attemptData.innerHTML = attempt;

    setTimeout(() => {
        userinp.value = '';
        if (cnum !== usernum) message.innerHTML = '';
        message.className = '';
    }, 2000);
}

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    message.innerHTML = '';
    userinp.value = '';
    resBtn.style.display = "none";

    celebrateGif.style.display = "none";
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart); 
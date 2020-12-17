function terminei() {

    let question1 = [...document.getElementsByName('question1')].filter(el => el.checked)[0]
    let question2 = [...document.getElementsByName('question2')].filter(el => el.checked)[0]
    let question3 = [...document.getElementsByName('question3')].filter(el => el.checked)[0]
    let question4 = [...document.getElementsByName('question4')].filter(el => el.checked)[0]
    let question5 = [...document.getElementsByName('question5')].filter(el => el.checked)[0]

    correct = 0;
    wrong = 0;

    if (question1?.value === "61") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question2?.value === "22") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question3?.value === "U") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question4?.value === "MNO16") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    if (question5?.value === "18") {
        console.log('Correct Answer')
        correct++;
    } else {
        console.log('Wrong Answer')
        wrong++;
    }

    let messages = ["Great Job!", "That's Okay!", "Good!", "Not bad", "You really need to do better :("];

    let range;
    if (correct == 0 || correct == 1) {
        range = 4;
    }
    if (correct == 2) {
        range = 3;
    }
    if (correct == 3) {
        range = 2;
    }
    if (correct == 4) {
        range = 1;
    }
    if (correct == 5) {
        range = 0;
    }

    document.getElementById("result").style.visibility = "visible";
    document.getElementById("certa").innerHTML += `<p>${correct} correct.</p>`;
    document.getElementById("errada").innerHTML += `<p>${wrong} wrong.</p>`;
    document.getElementById("msg").innerHTML = messages[range];
    
}


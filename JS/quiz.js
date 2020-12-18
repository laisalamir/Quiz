function prox1() {
    document.getElementById("button1").style.display = "none";
    document.getElementById("quiz1").style.visibility = "visible";
    if (quiz1?.value == "0") {
        alert("Escolha umas das opções !!")
    }
}

function prox2() {
    document.getElementById("quiz1").style.display = "none";
    document.getElementById("quiz2").style.visibility = "visible";
    if (quiz2?.value == "0") {
        alert("Escolha umas das opções !!")
    }
}

function prox3() {
    document.getElementById("quiz2").style.display = "none";
    document.getElementById("quiz3").style.visibility = "visible";
}

function prox4() {
    document.getElementById("quiz3").style.display = "none";
    document.getElementById("quiz4").style.visibility = "visible";
}

function prox5() {
    document.getElementById("quiz4").style.display = "none";
    document.getElementById("quiz5").style.visibility = "visible";
}

function terminei() {
    let question1 = [...document.getElementsByName('question1')].filter(el => el.checked)[0]
    let question2 = [...document.getElementsByName('question2')].filter(el => el.checked)[0]
    let question3 = [...document.getElementsByName('question3')].filter(el => el.checked)[0]
    let question4 = [...document.getElementsByName('question4')].filter(el => el.checked)[0]
    let question5 = [...document.getElementsByName('question5')].filter(el => el.checked)[0]

    let = correct = 0;
    let = wrong = 0;

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

    let messages = ["Bom Trabalho!", "Muito Bem!", "Boa!", "Até que não foi tão ruim!", " Você realmente precisa fazer melhor:("];

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
    document.getElementById("quiz5").style.display = "none";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("certa").innerHTML += `<p>${correct} correct.</p>`;
    document.getElementById("errada").innerHTML += `<p>${wrong} wrong.</p>`;
    document.getElementById("msg").innerHTML = messages[range];
    document.getElementById("gif");

}


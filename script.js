const Questions = [
    {
        q: "What does F stand for in Beyblade X?",
        a: [{text: "Firenze", isCorrect: false},
            {text: "Fat", isCorrect: false},
            {text: "Flat", isCorrect: true},
            {text: "idk", isCorrect: false},
           ]
    },
    {
        q: "What are the three parts in a Bey?",
        a: [{text: "The gear chip, the Ratchet, and the Bit.", isCorrect: false},
            {text: "The Blade, the Core, and the Bit. ", isCorrect: false},
            {text: "The top, the middle, and the bottom.", isCorrect: false},
            {text: "The Blade, the Ratchet, and the Bit.", isCorrect: true},
           ]
    },
    {
        q: "What was Robin Kazami's first Bey?",
        a: [{text: "Strike Hawk", isCorrect: true},
            {text: "Scythe Incendio", isCorrect: false},
            {text: "Sword Dran", isCorrect: false},
            {text: "Arrow Wizard", isCorrect: false},
           ]
    },
    {
        q: "What is the fastest Beyblade?",
        a: [{text: "Feather Phoenix", isCorrect: false},
            {text: "Soar Phoenix", isCorrect: false},
            {text: "Dagger Dran", isCorrect: true},
            {text: "Gale Wyvern", isCorrect: false},
           ]
    },
    {
        q: "What is Khrome Ryugu's  team name?",
        a: [{text: "Team Persona", isCorrect: false},
            {text: "Team Yggdrassil", isCorrect: false},
            {text: "Team Pendragon", isCorrect: true},
            {text: "Team Zodiac", isCorrect: false},
           ]
    },
    {
        q: "What was Khrome Ryugu's past Bey before Cobalt Dragoon and his Drake Beys?",
        a: [{text: "Sword Dran", isCorrect: true},
            {text: "Dagger Dran", isCorrect: false},
            {text: "Black Shell", isCorrect: false},
            {text: "Crimson Garuda", isCorrect: false},
           ]
    },
    {
        q: "What was Multi's first Bey that was introduced?",
        a: [{text: "Sword Dran", isCorrect: false},
            {text: "Lance Knight", isCorrect: false},
            {text: "Arrow Wizard", isCorrect: true},
            {text: "Helm Knight", isCorrect: false},
           ]
    },
    
    // add more questions here....
]; 

let currQuestion = 0;
let score = 0;

function loadQues() 
{
    const question = document.getElementById("ques");
    const opt = document.getElementById("opt");

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = "";

    for ( let i = 0; i < Questions[currQuestion].a.length; i++ )
    {
        const choicesDiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesDiv.appendChild(choice);
        choicesDiv.appendChild(choiceLabel);
        opt.appendChild(choicesDiv);
    }
}

loadQues();

function checkAns()
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if ( Questions[currQuestion].a[selectedAns].isCorrect  )
    {
        score++;
        console.log("Correct");
        nextQuestion();
    }
    else
    {
        nextQuestion();
    }
}

function loadScore() 
{
    const totalScore = document.getElementById("score");
    // ToDo: finish this later...
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`;
}

function nextQuestion() 
{
    if (  currQuestion < Questions.length - 1  )
    {
        currQuestion++;
        loadQues();
    }
    else
    {
        document.getElementById("ques").remove();
        document.getElementById("opt").remove();
        document.getElementById("btn").remove();
        loadScore();
    }
}
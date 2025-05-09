let currentQuestionIndex = 0;
let score = 0;
let username = '';
let userAnswers = []; // Array to store user's answers
let selectedQuestions = []; // Array to store the randomly selected questions

document.getElementById("start-btn").addEventListener("click", startQuiz);

// Questions Dictionary
const questions = [
    {
        id: 1,
        question: "Do you love Jehovah?",
        options: ["Absolutely", "Sure", "Kind of", "No"],
        scores: [10, 0, 0, 0],
        correct: ["Absolutely"],
    },
    {
        id: 2,
        question: 'After what time did Adam and Eve eat the fruit? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["4026 B.C.E", "4027 B.C.E", "4036 B.C.E", "4035 B.C.E"],
        scores: [10, 0, 0, 0],
        correct: ["4026 B.C.E"],
    },
    {
        id: 3,
        question: 'When did Jehovah tell Abraham about the promised "offspring"? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["1943 B.C.E", "1948 B.C.E", "1938 B.C.E", "1928 B.C.E"],
        scores: [0, 0, 10, 0],
        correct: ["1938 B.C.E"],
    },
    {
        id: 4,
        question: 'When did Jehovah assure David about his son being the promised "offspring"? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["Before 1060 B.C.E", "Before 1070 B.C.E", "After 1070 B.C.E", "After 1080 B.C.E"],
        scores: [0, 0, 10, 0],
        correct: ["After 1070 B.C.E"],
    },
    {
        id: 5,
        question: 'When was Jesus baptized? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["26 C.E", "27 B.C.E", "28 C.E", "29 C.E"],
        scores: [0, 0, 0, 10],
        correct: ["29 C.E"],
    },
    {
        id: 6,
        question: 'What is the correct order of World Powers as foretold by Daniel? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/daniel-2-image/" target="_blank">(Appendix B9)</a>',
        options: [
            "Greece, Babylon, Medo-Persia, Rome, Anglo-America",
            "Egypt, Babylon, Greece, Rome, Anglo-America",
            "Babylon, Medo-Persia, Greece, Rome, Anglo-America",
            "Egypt, Medo-Persia, Greece, Rome, Anglo-America",
        ],
        scores: [0, 0, 10, 0],
        correct: ["Babylon, Medo-Persia, Greece, Rome, Anglo-America"],
    },
    {
        id: 7,
        question: 'What island was Paul shipwrecked on? <a href="https://www.jw.org/en/library/bible/study-bible/books/acts/28/#v44028001" target="_blank">(Acts 28:1)</a>',
        options: ["Cyprus", "Malta", "Crete", "Rhodes"],
        scores: [0, 10, 0, 0],
        correct: ["Malta"]
    },
    {
        id: 8,
        question: 'Which of the prophect foretold the World Powers and the wildbeasts? <a href="" target=_blank"></a>',
        options: ["Jeremiah", "Isaiah", "Elijah", "Daniel"],
        scores: [0, 0 , 0, 10],
        correct: ["Daniel"],
    },
    {
        id: 9,
        question: 'During which missionary tour was Paul shipwrecked? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/spread-of-christianity-map/" target="_blank">(Appendix B13)</a>',
        options: ["1st missionary tour", "2nd missionary tour", "3rd missionary tour", "Trip to Rome"], 
        scores: [0, 0, 0, 10],
        correct: ["Trip to Rome"],
    },
    {
        id: 10,
        question: 'Which currency did Jesus say the poor widow put in the contribution box? <a href="https://www.jw.org/en/library/bible/study-bible/books/luke/21/#v42021002" target="_blank">(Luke 21:2), See study note</a>',
        options: ["Lepton", "Denarius", "Didrachma", "Drachma"],
        scores: [10, 0, 0, 0],
        correct: ["Lepton"],
    },
    {
        id: 11,
        question: 'Which Bethel facility has the most tours avaliable? <a href="" target=_blank"></a>',
        options: ["Patterson", "Fishkill", "Walkhill", "Warwick"],
        scores: [10, 0 , 0, 0],
        correct: ["Patterson"],
    },
    {
        id: 12,
        question: 'What dimensions did Jehovah specify for Noah to use in the creation of the ark? <a href="https://www.jw.org/en/library/bible/study-bible/books/genesis/6/#v1006015" target="_blank">(Genesis 6:15)</a>',
        options: [
            "200 cubits long, 50 cubits wide, and 30 cubits high",
            "300 cubits long, 50 cubits wide, and 30 cubits high",
            "300 cubits long, 30 cubits wide, and 30 cubits high",
            "300 cubits long, 50 cubits wide, and 50 cubits high",
        ],
        scores: [0, 10, 0, 0],
        correct: ["300 cubits long, 50 cubits wide, and 30 cubits high"],
    },
    {
        id: 13,
        question: 'Which of the following is not listed as a work of the flesh? <a href="" target=_blank">(Galatians 5:19)</a>',
        options: ["drunkedness", "uncleanness", "envy", "haughty"],
        scores: [0, 0 , 0, 10],
        correct: ["haughty"],
    },
    {
        id: 14,
        question: 'What color cord did Rahab throw out her window? <a href="https://www.jw.org/en/library/bible/study-bible/books/joshua/2/#v6002021" target="_blank">(Joshua 2:21)</a>',
        options: ["Red", "Crimson", "Scarlet", "Maroon"],
        scores: [0, 0, 10, 0],
        correct: ["Scarlet"],
    },
    {
        id: 15,
        question: 'How tall was the giant Goliath? <a href="" target=_blank">(1 Samuel 17:4)</a>',
        options: ["5 cubits", "6 cubits", "7 cubits", "8 cubits"],
        scores: [0, 10 , 0, 0],
        correct: ["6 cubits"],
    },
    {
        id: 16,
        question: "Which of the following countries DOES have reported Jehovah's Witnesses? <a href=\"https://www.jw.org/en/jehovahs-witnesses/worldwide/\" target=\"_blank\">Jehovah's People Around the World</a>",
        options: ["North Korea", "Afghanistan", "Somalia", "Sudan"],
        scores: [0, 0, 0, 10],
        correct: ["Sudan"],
    },
    {
        id: 17,
        question: 'How many Plagues took place in Egypt? <a href="" target=_blank"></a>',
        options: ["3", "7", "10", "12"],
        scores: [0, 0 , 10, 0],
        correct: ["10"],
    },
    {
        id: 18,
        question: 'Who was the oldest man in the Bible? <a href="https://www.jw.org/en/library/bible/study-bible/books/genesis/5/#v1005027" target="_blank">(Genesis 5:27)</a>',
        options: ["Methuselah", "Enoch", "Noah", "Lamech"],
        scores: [10, 0 , 0, 0],
        correct: ["Methuselah"],
    },
    {
        id: 19,
        question: 'Which of the following men was both a judge and a prophet? <a href="" target=_blank"></a>',
        options: ["Adam", "Abraham", "Enoch", "Moses"],
        scores: [0, 0 , 10, 0],
        correct: ["Enoch"],
    },
    {
        id: 20,
        question: 'All the animals that Noah was instructed to bring onto the Ark was accoring to what? <a href="https://www.jw.org/en/library/bible/study-bible/books/genesis/6/#v1006020" target="_blank">(Genesis 6:20)</a>',
        options: ["Species", "Family", "Kind", "Domain"],
        scores: [0, 0 , 10, 0],
        correct: ["Kind"],
    },
    {
        id: 21,
        question: 'How many of the 10 plagues affected the Isrealites? <a href="https://www.jw.org/en/library/books/bible-stories/2/10-plagues/" target="_blank">My Book of Bible Stories, Story 32</a>',
        options: ["3", "2", "1", "None"],
        scores: [10, 0 , 0, 0],
        correct: ["3"],
    },
    {
        id: 22,
        question: 'Why did Jehovah not allow Moses to enter into the promise land? <a href="https://www.jw.org/en/library/bible/study-bible/books/numbers/20/#v4020012" target="_blank">(Numbers 20:12)</a>',
        options: ["Allowed the Isrealites to worship the golden calf", 
                  "Did not sancify Jehovah when performing a miracle", 
                  "Shied away from his assignment to confront Pharaoh", 
                  "Put blood on the door post when the angel passed over the houses in Egypt"],
        scores: [0, 10 , 0, 0],
        correct: ["Did not sancify Jehovah when performing a miracle"],
    },
    {
        id: 23,
        question: 'How many years did the Isrealites spend crossing the wilderness? <a href="https://www.jw.org/en/library/bible/study-bible/books/deuteronomy/29/#v5029005" target="_blank">(Deuteronomy 29:1-29)</a>',
        options: ["60", "50", "30", "40"],
        scores: [0, 0 , 0, 10],
        correct: ["40"],
    },
    {
        id: 24,
        question: 'Which of the following men was the first faithful human prophet? <a href="" target=_blank">(Jude 14, 15)</a>',
        options: ["Adam", "Abraham", "Enoch", "Moses"],
        scores: [0, 0 , 10, 0],
        correct: ["Enoch"],
    },
    {
        id: 25,
        question: 'Which king of Judah served as king the longest? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-a/kings-of-judah/" target="_blank">Appendix A6-A</a>',
        options: ["Uzziah(Azariah)", "Asa", "Manasseh", "Jehoash"],
        scores: [0, 0 , 10, 0],
        correct: ["Manasseh"],
    },
    {
        id: 26,
        question: 'Which of the following is not a part of the fruitage of the spirit? <a href="" target=_blank">(Galatians 5:22, 23)</a>',
        options: ["humility", "goodness", "peace", "mildness"],
        scores: [10, 0 , 0, 0],
        correct: ["humility"],
    },
    {
        id: 27,
        question: 'Which prophet of Isreal served during the time of King Hezekaih? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-a/kings-of-israel/" target="_blank">Appendix A6-B</a>',
        options: ["Isaiah", "Hosea", "Zephaniah", "Micah"],
        scores: [10, 0 , 0, 10],
        correct: ["Isaiah"],
    },
    {
        id: 28,
        question: 'What year did Jesus become king of God\'s Kingdom? <a href="" target="_blank"></a>',
        options: ["30 C.E.", "33 C.E.", "1914 C.E.", "1918 C.E."],
        scores: [0, 0 , 10, 0],
        correct: ["1914 C.E."],
    },
    {
        id: 29,
        question: 'How many men accompanied Gideon to battle against...? <a href="" target="_blank"></a>',
        options: ["300", "400", "1,000", "1,200"],
        scores: [10, 0 , 0, 0],
        correct: ["300"],
    },
    {
        id: 30,
        question: 'Which of the following women was the first prophetess? <a href="" target=_blank"></a>',
        options: ["Deboarh", "Noadiah", "Miriam", "Anna"],
        scores: [0, 0 , 10, 0],
        correct: ["Miriam"],
    },
    {
        id: 31,
        question: 'Which king of Judah did not have a prophet serving during his reign? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-a/kings-of-judah/" target="_blank">Appendix A6-A</a>',
        options: ["Jehoshaphat", "Rehoboam", "Abijah(Abjijam)", "Ahazaih"],
        scores: [0, 10 , 0, 0],
        correct: ["Rehoboam"],
    },
    // Add more questions here
];

// Fisher-Yates shuffle algorithm
function shuffle(array) {
    const newArray = array.slice(); // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// start quiz
function startQuiz() {
    username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter your name to start the quiz.");
        return;
    }

    // Get the number of questions requested by the user
    const numQuestions = parseInt(document.getElementById("inputQuestions").value);
    
    // Validate the number of questions
    if (isNaN(numQuestions) || numQuestions < 1 || numQuestions > questions.length) {
        alert("Please enter a valid number of questions between 1 and " + questions.length + ".");
        return;
    }

    // Randomly select questions
    selectedQuestions = shuffle(questions).slice(0, numQuestions);

    document.getElementById("intro-text").style.display = "none";
    document.getElementById("username").style.display = "none";
    document.getElementById("inputQuestions").style.display = "none";
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; // Reset user answers
    showNextQuestion();
}

// go to next question
function showNextQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        displayScore();
        return;
    }

    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById("question").innerHTML = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            score += questionData.scores[index];
            userAnswers[currentQuestionIndex] = option; // Store user's answer
            
            // Disable all option buttons after selection
            const allButtons = optionsContainer.querySelectorAll("button");
            allButtons.forEach(btn => {
                btn.disabled = true;
                // Add styling to show selected answer
                if (btn === button) {
                    btn.classList.add("selected");
                    // Add class for correct/incorrect
                    if (questionData.correct.includes(option)) {
                        btn.classList.add("correct");
                    } else {
                        btn.classList.add("incorrect");
                    }
                }
                // Highlight correct answer if user selected wrong
                else if (questionData.correct.includes(btn.textContent)) {
                    btn.classList.add("correct");
                }
            });
            
            document.getElementById("next-btn").style.display = "block";
        });
        optionsContainer.appendChild(button);
    });

    document.getElementById("next-btn").style.display = "none";
}

// Next button event listener
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    showNextQuestion();
});

// display final score
function displayScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    const finalScore = (score / (selectedQuestions.length * 10)) * 100;
    document.getElementById("score").textContent = finalScore.toFixed(2);

    const message = finalScore >= 70 
        ? `Yay, ${username}, you did a good job! :)` 
        : `Oh no, ${username}, it looks like you need to do some personal study! :)`;
    document.getElementById("message").textContent = message;

    // Display score statistics
    let correctAnswers = 0;
    for (let i = 0; i < selectedQuestions.length; i++) {
        if (selectedQuestions[i].correct.includes(userAnswers[i])) {
            correctAnswers++;
        }
    }

    document.getElementById("scoreStats").innerHTML = `
        <p>You answered ${correctAnswers} questions correctly out of ${selectedQuestions.length}.</p>
        <button onclick="location.reload()">Try Again</button>
    `;
}

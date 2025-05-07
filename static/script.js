const questions = [
    {
        question: "Do you love Jehovah?",
        options: ["Absolutely", "Sure", "Kind of", "No"],
        scores: [10, 0, 0, 0],
        correct: ["Absolutely"],
    },
    {
        question: 'After what time did Adam and Eve eat the fruit? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["4026 B.C.E", "4027 B.C.E", "4036 B.C.E", "4035 B.C.E"],
        scores: [10, 0, 0, 0],
        correct: ["4026 B.C.E"],
    },
    {
        question: 'When did Jehovah tell Abraham about the promised "offspring"? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["1943 B.C.E", "1948 B.C.E", "1938 B.C.E", "1928 B.C.E"],
        scores: [0, 0, 10, 0],
        correct: ["1938 B.C.E"],
    },
    {
        question: 'When did Jehovah assure David about his son being the promised "offspring"? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["Before 1060 B.C.E", "Before 1070 B.C.E", "After 1070 B.C.E", "After 1080 B.C.E"],
        scores: [0, 0, 10, 0],
        correct: ["After 1070 B.C.E"],
    },
    {
        question: 'When was Jesus baptized? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["26 C.E", "27 B.C.E", "28 C.E", "29 C.E"],
        scores: [0, 0, 0, 10],
        correct: ["29 C.E"],
    },
    {
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
        question: 'What island was Paul shipwrecked on? <a href="https://www.jw.org/en/library/bible/study-bible/books/acts/28/#v44028001" target="_blank">(Acts 28:1)</a>',
        options: ["Cyprus", "Malta", "Crete", "Rhodes"],
        scores: [0, 10, 0, 0],
        correct: ["Malta"]
    },
    {
        question: 'Which of the prophect foretold the World Powers and the wildbeasts? <a href="" target=_blank"></a>',
        options: ["Jeremiah", "Isaiah", "Elijah", "Daniel"],
        scores: [0, 0 , 0, 10],
        correct: ["Daniel"],
    },
    {
        question: 'During which missionary tour was Paul shipwrecked? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/spread-of-christianity-map/" target="_blank">(Appendix B13)</a>',
        options: ["1st missionary tour", "2nd missionary tour", "3rd missionary tour", "Trip to Rome"], 
        scores: [0, 0, 0, 10],
        correct: ["3rd missionary tour"],
    },
    {
        question: 'Which currency did Jesus say the poor widow put in the contribution box? <a href="https://www.jw.org/en/library/bible/study-bible/books/luke/21/#v42021002" target="_blank">(Luke 21:2), See study note</a>',
        options: ["Lepton", "Denarius", "Didrachma", "Drachma"],
        scores: [10, 0, 0, 0],
        correct: ["Lepton"],
    },
    {
        question: 'Which Bethel facility has the most tours avaliable? <a href="" target=_blank"></a>',
        options: ["Patterson", "Fishkill", "Walkhill", "Warwick"],
        scores: [10, 0 , 0, 0],
        correct: ["Patterson"],
    },
    {
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
        question: 'Which of the following is not listed as a work of the flesh? <a href="" target=_blank">(Galatians 5:19)</a>',
        options: ["drunkedness", "uncleanness", "envy", "haughty"],
        scores: [0, 0 , 0, 10],
        correct: ["haughty"],
    },
    {
        question: 'What color cord did Rahab throw out her window? <a href="https://www.jw.org/en/library/bible/study-bible/books/joshua/2/#v6002021" target="_blank">(Joshua 2:21)</a>',
        options: ["Red", "Crimson", "Scarlet", "Maroon"],
        scores: [0, 0, 10, 0],
        correct: ["Scarlet"],
    },
    {
        question: 'How tall was the giant Goliath? <a href="" target=_blank">(1 Samuel 17:4)</a>',
        options: ["5 cubits", "6 cubits", "7 cubits", "8 cubits"],
        scores: [0, 10 , 0, 0],
        correct: ["6 cubits"],
    },
    {
        question: "Which of the following countries DOES have reported Jehovah's Witnesses? <a href=\"https://www.jw.org/en/jehovahs-witnesses/worldwide/\" target=\"_blank\">Jehovah's People Around the World</a>",
        options: ["North Korea", "Afghanistan", "Somalia", "Sudan"],
        scores: [0, 0, 0, 10],
        correct: ["Sudan"],
    },
    {
        question: 'How many Plagues took place in Egypt? <a href="" target=_blank"></a>',
        options: ["3", "7", "10", "12"],
        scores: [0, 0 , 10, 0],
        correct: ["10"],
    },
    {
        question: 'Who was the oldest man in the Bible? <a href="https://www.jw.org/en/library/bible/study-bible/books/genesis/5/#v1005027" target="_blank">(Genesis 5:27)</a>',
        options: ["Methuselah", "Enoch", "Noah", "Lamech"],
        scores: [10, 0 , 0, 0],
        correct: ["Methuselah"],
    },
    {
        question: 'Which of the following men was both a judge and a prophet? <a href="" target=_blank"></a>',
        options: ["Adam", "Abraham", "Enoch", "Moses"],
        scores: [0, 0 , 10, 0],
        correct: ["Enoch"],
    },
    {
        question: 'All the animals that Noah was instructed to bring onto the Ark was accoring to what? <a href="https://www.jw.org/en/library/bible/study-bible/books/genesis/6/#v1006020" target="_blank">(Genesis 6:20)</a>',
        options: ["Species", "Family", "Kind", "Domain"],
        scores: [0, 0 , 10, 0],
        correct: ["Kind"],
    },
    {
        question: 'How many of the 10 plagues affected the Isrealites? <a href="https://www.jw.org/en/library/books/bible-stories/2/10-plagues/" target="_blank">My Book of Bible Stories, Story 32</a>',
        options: ["3", "2", "1", "None"],
        scores: [10, 0 , 0, 0],
        correct: ["3"],
    },
    {
        question: 'Why did Jehovah not allow Moses to enter into the promise land? <a href="https://www.jw.org/en/library/bible/study-bible/books/numbers/20/#v4020012" target="_blank">(Numbers 20:12)</a>',
        options: ["Allowed the Isrealites to worship the golden calf", 
                  "Did not sancify Jehovah when performing a miracle", 
                  "Shied away from his assignment to confront Pharaoh", 
                  "Put blood on the door post when the angel passed over the houses in Egypt"],
        scores: [0, 10 , 0, 0],
        correct: ["Did not sancify Jehovah when performing a miracle"],
    },
    {
        question: 'How many years did the Isrealites spend crossing the wilderness? <a href="https://www.jw.org/en/library/bible/study-bible/books/deuteronomy/29/#v5029005" target="_blank">(Deuteronomy 29:1-29)</a>',
        options: ["60", "50", "30", "40"],
        scores: [0, 0 , 0, 10],
        correct: ["40"],
    },
    {
        question: 'Which of the following men was the first faithful human prophet? <a href="" target=_blank">(Jude 14, 15)</a>',
        options: ["Adam", "Abraham", "Enoch", "Moses"],
        scores: [0, 0 , 10, 0],
        correct: ["Enoch"],
    },
    {
        question: 'Which king of Judah served as king the longest? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-a/kings-of-judah/" target="_blank">Appendix A6-A</a>',
        options: ["Uzziah(Azariah)", "Asa", "Manasseh", "Jehoash"],
        scores: [0, 0 , 10, 0],
        correct: ["Manasseh"],
    },
    {
        question: 'Which of the following is not a part of the fruitage of the spirit? <a href="" target=_blank">(Galatians 5:22, 23)</a>',
        options: ["humility", "goodness", "peace", "mildness"],
        scores: [10, 0 , 0, 0],
        correct: ["humility"],
    },
    {
        question: 'Which prophet of Isreal served during the time of King Hezekaih? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-a/kings-of-israel/" target="_blank">Appendix A6-B</a>',
        options: ["Isaiah", "Hosea", "Zephaniah", "Micah"],
        scores: [10, 0 , 0, 10],
        correct: ["Isaiah"],
    },
    {
        question: "What year did Jesus become king of God's Kingdom? <a href="" target=_blank'></a>",
        options: ["30 C.E.", "33 C.E.", "1914 C.E.", "1918 C.E."],
        scores: [0, 0 , 10, 0],
        correct: ["1914 C.E."],
    },
    {
        question: 'How many men accompanied Gideon to battle against...? <a href="" target="_blank"></a>',
        options: ["300", "400", "1,000", "1,200"],
        scores: [10, 0 , 0, 0],
        correct: ["300"],
    },
    {
        question: 'Which of the following women was the first prophetess? <a href="" target=_blank"></a>',
        options: ["Deboarh", "Noadiah", "Miriam", "Anna"],
        scores: [0, 0 , 10, 0],
        correct: ["Miriam"],
    },
    {
        question: 'Which king of Judah did not have a prophet serving during his reign? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-a/kings-of-judah/" target="_blank">Appendix A6-A</a>',
        options: ["Jehoshaphat", "Rehoboam", "Abijah(Abjijam)", "Ahazaih"],
        scores: [0, 10 , 0, 0],
        correct: ["Rehoboam"],
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let username = '';

document.getElementById("start-btn").addEventListener("click", startQuiz);
document.getElementById("next-btn").addEventListener("click", showNextQuestion);

function startQuiz() {
    username = document.getElementById("username").value.trim(); // Get the username from  input 
    if (!username) {
        alert("Please enter your name to start the quiz."); // Alert if no name is entered
        return;
    }

    document.getElementById("intro-text").style.display = "none";
    document.getElementById("username").style.display = "none"; // Hide the username input
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    currentQuestionIndex = 0; // Reset the question 
    score = 0; // rest score
    showNextQuestion(); // show first question
}

function showNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        displayScore();
        return;
    }

    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerHTML = questionData.question; 

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = ""; 
    questionData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            score += questionData.scores[index];
            document.getElementById("next-btn").style.display = "block"; 
        });
        optionsContainer.appendChild(button);
    });

    // Hide the next button initially
    document.getElementById("next-btn").style.display = "none"; 
}

// Update the showNextQuestion function to increment the index
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++; 
    showNextQuestion(); 
});

function displayScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";

    const finalScore = (score / (questions.length * 10)) * 100;
    document.getElementById("score").textContent = finalScore.toFixed(2);

    const message = finalScore >= 70 
        ? `Yay, ${username}, you did a good job! :)` 
        : `Oh no, ${username}, it looks like you need to do some personal study! :)`;
    document.getElementById("message").textContent = message;
}



// EDIT AND UNCOMMENT SINCE THIS IS RANDOM QUESTION SELECTION FUNCTION
/* 

// Questions array
const questions = [
    {
        id: 1,
        question: "Do you love Jehovah?",
        options: ["Absolutely", "Sure", "Kind of", "No"],
        scores: [10, 0, 0, 0],
    },
    {
        id: 2,
        question: 'After what time did Adam and Eve eat the fruit? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-b/message-of-the-bible/" target="_blank">(Appendix B1)</a>',
        options: ["4026 B.C.E", "4036 B.C.E", "4035 B.C.E", "4025 B.C.E"],
        scores: [10, 0, 0, 0],
    },
    // ... (other questions)
    {
        id: 20,
        question: 'Which king of Judah did not have a prophet serving during his reign? <a href="https://www.jw.org/en/library/bible/study-bible/appendix-a/kings-of-judah/" target="_blank">Appendix A6-A</a>',
        options: ["Jehoshaphat", "Rehoboam", "Abijah(Abjijam)", "Ahazaih"],
        scores: [0, 10, 0, 0],
    },
];

// Prompt user for a number between 1 and the number of questions
const questionsLength = questions.length + 1;
let input = prompt("Please enter a number between 1 and " + questionsLength + ":");

// Convert input to a number
input = parseInt(input, 10);

// Validate input
if (isNaN(input) || input < 1 || input > questions.length) {
    console.error("Invalid input. Please enter a number between 1 and " + questions.length + ".");
} else {
    // Fisher-Yates shuffle algorithm
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Shuffle questions to get random order without repeats
    const shuffledQuestions = shuffle(questions.slice());

    // Take only up to 'input' questions from shuffled array
    const selectedQuestions = shuffledQuestions.slice(0, input);

    // Output the randomly selected unique questions
    selectedQuestions.forEach(q => {
        console.log(`Question: ${q.question}`);
        console.log(`Options: ${q.options.join(', ')}`);
    });
}
*/

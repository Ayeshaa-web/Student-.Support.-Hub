// Knowledge base data structure
const knowledgeBase = [
    {
        category: "Academic Support",
        question: "How do I access course materials?",
        answer: "You can access course materials via the student portal. Navigate to the 'Resources' section."
    },
    {
        category: "Academic Support",
        question: "What is the process for dropping a class?",
        answer: "To drop a class, go to the Registrar's Office or use the online form in the 'Course Management' section of the portal."
    },
    {
        category: "Technical Support",
        question: "How do I reset my student portal password?",
        answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your registered email."
    },
    {
        category: "Financial Aid",
        question: "How do I apply for a scholarship?",
        answer: "Scholarship applications are available in the 'Financial Aid' section of the student portal. Fill out the form and submit it before the deadline."
    }
];

// Function to render the knowledge base
function renderKnowledgeBase() {
    const container = document.getElementById('knowledgeBaseContainer');
    container.innerHTML = ''; // Clear previous content

    knowledgeBase.forEach(entry => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.textContent = entry.question;

        const answerElement = document.createElement('div');
        answerElement.classList.add('answer');
        answerElement.textContent = entry.answer;

        container.appendChild(questionElement);
        container.appendChild(answerElement);
    });
}

// Function to search the knowledge base
function searchKnowledgeBase() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const container = document.getElementById('knowledgeBaseContainer');
    container.innerHTML = ''; // Clear previous content

    const filteredEntries = knowledgeBase.filter(entry =>
        entry.question.toLowerCase().includes(input) || entry.answer.toLowerCase().includes(input)
    );

    if (filteredEntries.length > 0) {
        filteredEntries.forEach(entry => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.textContent = entry.question;

            const answerElement = document.createElement('div');
            answerElement.classList.add('answer');
            answerElement.textContent = entry.answer;

            container.appendChild(questionElement);
            container.appendChild(answerElement);
        });
    } else {
        container.innerHTML = '<p>No results found.</p>';
    }
}

// Initialize the knowledge base
renderKnowledgeBase();
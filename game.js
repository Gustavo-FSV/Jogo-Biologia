// Array de perguntas e respostas
const questions = [
    {
        question: "Você é um cágado-do-São-Francisco e está em uma época de seca intensa. O que seria mais importante para aumentar suas chances de sobrevivência?",
        answers: ["Procurar áreas com água disponível e reduzir sua atividade para economizar energia.", "Ficar exposto ao sol durante todo o dia para produzir mais energia.", "Abandonar completamente ambientes próximos à água e subir em árvores."],
        correct: 0
    },
    {
        question: "Você é um teiú e precisa encontrar alimento durante um período de seca. Qual estratégia seria mais adequada?",
        answers: ["Alimentar-se apenas de folhas verdes, mesmo que estejam escassas.", 'Aproveitar diferentes fontes de alimento disponíveis, como frutos, insetos e pequenos animais.', 'Parar completamente de procurar alimento até começar a chover.'],
        correct: 1
    },
    {
        question: "Você é um teiú e o sol da Caatinga está muito forte. O que você poderia fazer para evitar o excesso de calor?",
        answers: ["Permanecer no sol mais quente do dia.", "Entrar na água e permanecer submerso durante várias horas.", "Procurar abrigo ou permanecer em locais mais protegidos durante os períodos mais quentes."],
        correct: 2
    },
    {
        question: "Você é um veado-catingueiro e percebe que a vegetação está muito seca. O que ajudaria na sua sobrevivência?",
        answers: ['Procurar áreas onde ainda existam plantas disponíveis e água.', 'Permanecer sempre no mesmo lugar, mesmo sem alimento.', 'Alimentar-se exclusivamente de carne.'],
        correct: 0
    },
    {
        question: 'Você é uma cuíca-graciosa e precisa evitar um predador durante a noite. Qual comportamento seria mais útil?',
        answers: ['Permanecer em áreas abertas e iluminadas.','Fazer barulho para chamar a atenção do predador.','Procurar abrigo e utilizar a vegetação para se esconder.'],
        correct: 2
    },
    {
        question: 'Você é um mocó e está vivendo durante uma longa estiagem. Qual seria uma boa estratégia?',
        answers: ['Correr constantemente durante o dia para procurar água.','Evitar qualquer tipo de abrigo para conseguir mais luz solar.','Economizar energia e procurar alimentos e abrigos disponíveis no ambiente.'],
        correct: 2
    },
    {
        question: 'Você é um mocó e percebe que um predador está se aproximando. O que você faria para aumentar suas chances de escapar?',
        answers: ['Ficaria parado em uma área completamente aberta.','Procuraria rapidamente um abrigo entre rochas ou outros locais protegidos.','Correria em direção ao predador.'],
        correct: 1
    },
    {
        question: 'Você é uma asa-branca e está enfrentando uma época de seca. O que seria importante para sua sobrevivência?',
        answers: ['Evitar completamente qualquer fonte de água.','Permanecer obrigatoriamente no mesmo local durante toda a seca.','Encontrar água e alimento disponíveis e deslocar-se para áreas mais favoráveis quando necessário.'],
        correct: 2
    },
    {
        question: 'Você é um periquito-da-caatinga e encontra uma árvore com frutos. O que você provavelmente faria?',
        answers: ['Aproveitaria os frutos como fonte de alimento.','Tentaria capturar exclusivamente animais maiores para comer.','Evitaria qualquer alimento vegetal.'],
        correct: 0
    },
    {
        question: 'Você é um periquito-da-caatinga e percebe que uma área ficou sem alimento. Qual comportamento poderia ajudar?',
        answers: ['Procurar outras áreas com recursos alimentares disponíveis.','Parar de se alimentar até a próxima estação chuvosa.','Permanecer no mesmo lugar esperando que o alimento apareça.'],
        correct: 0
    },
    {
        question: 'Você é um veado-catingueiro e começa uma chuva depois de vários meses de seca. O que provavelmente aconteceria com o ambiente ao longo do tempo?',
        answers: ['A chuva impediria completamente o crescimento das plantas.','A disponibilidade de vegetação e outros recursos poderia aumentar.','Todos os alimentos desapareceriam imediatamente.'],
        correct: 1
    },
    {
        question: 'Você é um cágado-do-São-Francisco e seu ambiente aquático começa a secar. Qual problema você enfrentaria?',
        answers: ['Teria maior dificuldade para encontrar água e condições adequadas para viver.','A seca faria com que ele passasse a viver naturalmente no alto das árvores.','Teria mais água disponível do que antes.'],
        correct: 0
    },
    {
        question: 'Você é uma asa-branca e precisa atravessar uma região muito quente da Caatinga. Qual característica do voo poderia ajudar?',
        answers: ['Aproveitar períodos mais favoráveis do dia e buscar locais com recursos e abrigo.','Voar continuamente sob o sol mais intenso, sem descansar.','Evitar qualquer deslocamento, mesmo quando não há alimento.'],
        correct: 0
    },
    {
        question: 'Você é uma cuíca-graciosa e encontra uma área com bastante vegetação, mas poucos locais para se esconder. Qual seria o principal problema?',
        answers: ['Falta de luz solar para produzir alimento.','Excesso de água disponível.','Maior exposição a predadores.'],
        correct: 2
    },
    {
        question: 'Você é um dos animais da Caatinga e percebe que a temperatura está muito alta durante o dia. Qual estratégia geral aumentaria suas chances de sobrevivência?',
        answers: ['Gastar o máximo possível de energia correndo sem necessidade.','Procurar abrigo, reduzir a exposição ao calor e realizar atividades em horários mais favoráveis.','Permanecer exposto ao sol durante o horário mais quente.'],
        correct: 1
    },
];

// Variáveis globais
let currentQuestionIndex = 0;
let shuffledQuestions = [];
let correctAnswers = 0;
let incorrectAnswers = 0;

// Embaralha as perguntas
function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

// Exibe a pergunta atual
function showQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");

    // Limpa as respostas anteriores
    answersElement.innerHTML = "";

    // Mostra a pergunta
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Cria os botões de resposta
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-button");
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });

    // Esconde o botão "Próxima Pergunta"
    nextButton.style.display = "none";
}

// Verifica a resposta selecionada
function selectAnswer(selectedIndex) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer-button");

    // Marca as respostas como corretas ou incorretas
    buttons.forEach((button, index) => {
        if (index === currentQuestion.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true; // Desativa os botões após a escolha
    });

    // Verifica se a resposta está correta
    if (selectedIndex === currentQuestion.correct) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
    }

    // Mostra o botão "Próxima Pergunta"
    document.getElementById("next-button").style.display = "block";
}
// Mostra a próxima pergunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// Finaliza o quiz
function endQuiz() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");

    // Exibe o número de acertos e erros
    questionElement.textContent = `Parabéns! Você completou o quiz.`;
    answersElement.innerHTML = `
        <p>Acertos: ${correctAnswers}</p>
        <p>Erros: ${incorrectAnswers}</p>
    `;

    // Esconde o botão "Próxima Pergunta"
    nextButton.style.display = "none";
}

// Inicializa o quiz
document.getElementById("next-button").addEventListener("click", nextQuestion);
shuffleQuestions();
showQuestion();
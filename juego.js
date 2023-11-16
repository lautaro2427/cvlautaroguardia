function submitQuiz() {
    const form = document.getElementById('Cuestionario');
    const resultContainer = document.getElementById('result');
    const answers = {
        r1: "Paris",
        r2: "Argentina",
        r3: "Uade",
        r4: "Lima",
        r5: "3"
    };

    let score = 0;

    for (let i = 1; i <= Object.keys(answers).length; i++) {
        const questionName = "r" + i;
        const selectedAnswer = form[questionName].value;
        const correctAnswer = answers[questionName];

        if (selectedAnswer === correctAnswer) {
            score += 1;
        } else {
            const correctOption = document.querySelector(`input[name="${questionName}"][value="${correctAnswer}"]`);
            correctOption.parentNode.classList.add('respuesta-correcta');
        }
    }

    const totalQuestions = Object.keys(answers).length;

    resultContainer.innerHTML = `Puntuación: ${score} de ${totalQuestions}. ${
        score === totalQuestions ? "¡Todas las respuestas son correctas!" : "Sigue practicando."
    }`;
}


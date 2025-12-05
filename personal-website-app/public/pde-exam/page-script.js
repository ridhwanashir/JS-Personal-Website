document.addEventListener("DOMContentLoaded", () => {

    // 1. Count the number of .question-block elements
    const questionBlocks = document.querySelectorAll('.question-block');
    const count = questionBlocks.length;

    // 2. Find the first <h1> element
    const firstH1 = document.querySelector('h1');

    if (firstH1) {
        // 4. Create a new <p> element
        const pElement = document.createElement('p');

        pElement.textContent = `There are ${count} question blocks in this document.`;

        pElement.classList.add('question-no-text');

        firstH1.insertAdjacentElement('afterend', pElement);
    }

    const revealSolutionButtons = document.querySelectorAll('.reveal-solution');
    const hideSolutionButtons = document.querySelectorAll('.hide-solution');

    revealSolutionButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault()
            const parentElement = this.parentElement;
            const questionChoicesContainer = parentElement.querySelector('.question-choices-container');
            const hideSolutionButton = parentElement.querySelector('.hide-solution')
            const questionAnswerBlockContainer = parentElement.parentElement.parentElement;

            questionAnswerBlockContainer.querySelector('.discussion-page-comments-section').style.display = 'block'

            hideSolutionButton.style.display = 'block'
            this.style.display = 'none'

            questionAnswerBlockContainer.querySelectorAll('.question-answer').forEach(element => {
                element.style.display = 'block'
            })

            if (questionChoicesContainer) {
                const correctHiddenLi = questionChoicesContainer.querySelectorAll('ul > li.correct-hidden');

                if (correctHiddenLi) {
                    correctHiddenLi.forEach(li => {
                        li.classList.add('correct-shown');
                    })
                }
            }
        })
    })

    hideSolutionButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault()
            const parentElement = this.parentElement;
            const questionChoicesContainer = parentElement.querySelector('.question-choices-container');
            const revealSolutionButton = parentElement.querySelector('.reveal-solution')
            const questionAnswerBlockContainer = parentElement.parentElement.parentElement;
            questionAnswerBlockContainer.querySelector('.discussion-page-comments-section').style.display = 'none'

            revealSolutionButton.style.display = 'block'
            this.style.display = 'none'

            questionAnswerBlockContainer.querySelectorAll('.question-answer').forEach(element => {
                element.style.display = 'none'
            })

            if (questionChoicesContainer) {
                const correctHiddenLi = questionChoicesContainer.querySelectorAll('ul > li.correct-shown');
                if (correctHiddenLi) {
                    correctHiddenLi.forEach(li => {
                        li.classList.remove('correct-shown');
                    })
                }
            }
        })
    })
})
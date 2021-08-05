const questionBtn = document.querySelectorAll('.questions__accordeon-question');
const answer = document.querySelectorAll('.questions__accordeon-answer');


questionBtn.forEach(function(accordeon) {
    accordeon.addEventListener('click', toggleAccordeon);
});

function toggleAccordeon(e) {
    for (const ans of answer) {
        if (ans.previousElementSibling.previousElementSibling === e.target) {
            ans.classList.toggle('visible');
            ans.previousElementSibling.classList.toggle('rotate');
        } else {
            ans.classList.remove('visible');
            ans.previousElementSibling.classList.remove('rotate');
        }
    }
}

const questionBtn = document.querySelectorAll('.questions__accordeon-question');
const questionCross = document.querySelectorAll('.questions__accordeon-question span');
const answer = document.querySelectorAll('.questions__accordeon-answer');


questionBtn.forEach(function(accordeon) {
    accordeon.addEventListener('click', toggleAccordeon);
});

function toggleAccordeon(e) {
    answer.forEach(function(content){
        if(content.previousElementSibling === e.target){
            content.classList.toggle('visible');
            toggleCross();
            
        } else {
            content.classList.remove('active');
             }
    })
}

function toggleCross() {
    questionCross.forEach(function(cross) {
        cross.classList.toggle('rotate');
    })
}
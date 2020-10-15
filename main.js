let studentSpans = document.querySelectorAll('.student');
let gradeSpans = document.querySelectorAll('.grade');

let changeNameBtn = document.querySelector('.change-name-btn');
let changeGradeBtn = document.querySelector('.change-grades-btn');

function changeName() {
   studentSpans.forEach(student => student.innerText = 'Joe Webster');
}

changeNameBtn.addEventListener('click', changeName);


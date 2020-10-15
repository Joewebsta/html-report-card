let studentSpans = document.querySelectorAll('.student');
let gradeSpans = document.querySelectorAll('.grade');

let changeNameBtn = document.querySelector('.change-name-btn');
let changeGradeBtn = document.querySelector('.change-grades-btn');

function changeName() {
   studentSpans.forEach(student => student.innerText = 'Joe Webster');
}

function changeGrade() {
  gradeSpans.forEach(grade => grade.innerText = 'A+');
}

changeNameBtn.addEventListener('click', changeName);
changeGradeBtn.addEventListener('click', changeGrade);


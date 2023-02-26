console.log('We are Ready to Rock and Roll');

$(document).ready(onReady);

let employees = [];
let monthlyEmployeeCosts= 0;
let totalBudget;

function onReady() {
    $('#submitBrn').on('click' , onSubmitEmployee);
    //listener for submit button
}

function onSubmitEmployee() {
    let firstName= $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeID = $('#employee-idInput').val();
    let jobTitle = $('#jobTitleInput') .val();
    let annualSalary = $('#salaryInput').val();
}
console.log('It is working', firstName, lastName, employeeID, jobTitle, annualSalary);
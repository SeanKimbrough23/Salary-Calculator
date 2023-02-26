console.log('We are Ready to Rock and Roll');

$(document).ready(onReady);

let employees = [];
let monthlyEmployeeCosts= 0;
let totalBudget;

function onReady() {
    $('#submitBrn').on('click' , onSubmitEmployee);
    //listener for submit button
    $('#gridOfEmployees').on('click', '.delete-btn', deleteEmployee);
}
function render () {
    // function to empty table and monthly employee costs
    $('.gridOfEmployees').empty();
for (let i=0; i < employees.length; i++ ) {
    $('.gridOfEmployees').append(`
            <p class='light-gray-background' id='${i}'>${employees[i].firstName}</p>
            <p class='baby-blue' id='${i}'>${employees[i].lastName}</p>
            <p class='light-gray-background' id='${i}'>${employees[i].employeeID}</p>
            <p class='baby-blue' id='${i}'>${employees[i].jobTitle}</p>
            <p class='light-gray-background' id='${i}'>${employees[i].annualSalary}</p>
            <button id='${i}' class='delete-btn'>Delete Employee</button>
        `);
}
}


function deleteEmployee () {
    console.log('Delete Employee');
    let indexOfEmployee = this.id;
    employees.splice(indexOfEmployee, 1); // remove employee
    console.log('After Removal of employee' , employees);
    render ();
}































function onSubmitEmployee() {
    let firstName= $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeID = $('#employee-idInput').val();
    let jobTitle = $('#jobTitleInput') .val();
    let annualSalary = $('#salaryInput').val();
}
console.log('It is working', firstName, lastName, employeeID, jobTitle, annualSalary);
console.log('We are Ready to Rock and Roll');
$(document).ready(readyNow);

let employees = [];
let monthlyEmployeeCosts= 0;
let totalBudget;

function readyNow() {
    $('#Submit').on('click', onSubmitEmployee);
    //listener for submit button
    $('#gridOfEmployees').on('click', '.delete-btn', deleteEmployee);
} 

console.log('On Ready Working');
function render () {
    // function to empty table and monthly employee costs
    $('.gridOfEmployees').empty();

    function submitEmployee() {
        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let employeeID = $('#employee-id').val();
        let jobTitle = $('#employee-title').val();
        let annualSalary = $('#annual-salary').val();
    
for (let employee of employees) {
    $('.salary-table').append(`
    <tr>
    <td>${employees.firstName}</td>
    <td>${employees.lastName}</td>
    <td>${employees.idNumber}</td>
    <td>${employees.jobTitle}</td>
    <td>${employees.annualSalary}</td>
    <td>
    <button class='deleteEmployeeBtn'></button>
    </td>
        `);
}
}
console.log("Render is working");

function deleteEmployee () {
    console.log('Delete Employee');
    let indexOfEmployee = this.id;
    employees.splice(indexOfEmployee, 1); // remove employee
    console.log('After Removal of employee' , employees);
    render ();

}

}

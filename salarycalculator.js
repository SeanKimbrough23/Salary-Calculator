console.log('We are Ready to Rock and Roll');

$(document).ready(onReady);

//  Global State - List of employees
let employees = [{firstName: 'Sean', lastName: 'Smith', idNumber: 414, title: 'CEO', annualSalary: 100000},
    {firstName: 'Emily', lastName: 'Hart', idNumber: 904, title: 'Human Resource', annualSalary: 65000},
    {firstName: 'Eve', lastName: 'Todd', idNumber: 123, title: 'Supervisor', annualSalary: 58500},
{firstName: 'Liana', lastName: 'Saenz', idNumber: 764, title: 'Floor Superviosr', annualSalary: 43000}];

//  Global State - format salary into USD currency
let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    useGrouping: true
});

function onReady() {
    render();
    // handle displaying the new employee's input 
    $('#addEmployeeForm').on('submit', onAddEmployee);

    // handle removing employee 
    $('tbody').on('click', '.deleteBtn', onDeleteEmployee);

    //handle displaying monthly total cost for all employees 
    let totalMonthlySalary = onCalculateTotalMonthlySalary();
    $('#totalMonthlySalary').text('Monthly Total: ' + formatter.format(totalMonthlySalary));
    console.log('in onReady function:.....$', totalMonthlySalary);

    //total monthly salary font size display 
    $('.total-monthly-salary').css('font-size', '24px');
};

function render() {
    $('#employee-table').empty();
    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let annualSalaryFormatted = formatter.format(employee.annualSalary);
        let row = $('<tr style="text-align:center">')
            .append(`<td>${employee.firstName}</td>`)
            .append(`<td>${employee.lastName}</td>`)
            .append(`<td>${employee.idNumber}</td>`)
            .append(`<td>${employee.title}</td>`)
            .append(`<td>${annualSalaryFormatted}</td>`)
            .append(`<td><button class="deleteBtn">Delete</button></td>`)
            .data('index', i);
        $('#employee-table').append(row);
        console.log('in render for each employee...', employee);
    } 
};

// add employee's inputs to the database:
function onAddEmployee(event) {
    event.preventDefault(); 

    let newEmployee = {
        firstName: $('#firstNameInput').val(), 
        lastName: $('#lastNameInput').val(),
        employeeID: $('#employeeIDInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: parseFloat($('#annualSalaryInput').val())
    }
    employees.push(newEmployee);

    let totalMonthlySalary = onCalculateTotalMonthlySalary(employees);
    updateTotalMonthlySalary(totalMonthlySalary);
    checkTotalSalary(totalMonthlySalary);

    console.log('onAddEmployee - new Employee:......', newEmployee);
    console.log('in onAddEmployee:', employees);

    // empty out the input field for the next employee's input 
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');

    render(); 
};

function onDeleteEmployee() {
    let currentTableRow = $(this).closest('tr').remove();
    let indexOfEmployee = currentTableRow.data('index');
    employees.splice(indexOfEmployee, 1);

    let totalMonthlySalary = onCalculateTotalMonthlySalary(employees);
    updateTotalMonthlySalary(totalMonthlySalary);

    render();
};

// calculate employees monthly salary total:
function onCalculateTotalMonthlySalary() {
    let totalAnnualSalary = 0;
    for (let employee of employees) {
        totalAnnualSalary += Number(employee.annualSalary);
    }

    let totalMonthlySalary = (totalAnnualSalary) / (12); 

    console.log('in onCalculateTotalMonthlySalary........', totalMonthlySalary);

    return totalMonthlySalary; 
};

function updateTotalMonthlySalary(totalMonthlySalary) {
    let totalSalaryFormatted = formatter.format(totalMonthlySalary);
    $('#totalMonthlySalary').text('Monthly Total: ' + totalSalaryFormatted);
    checkTotalSalary(totalMonthlySalary);
};

function checkTotalSalary(total) {
    if(total >= 20000) {
        $('.total-monthly-salary').addClass('over-budget');
    } else {
        $('.total-monthly-salary').removeClass('over-budget');
    }
};

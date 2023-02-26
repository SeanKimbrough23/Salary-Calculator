console.log('We are Ready to Rock and Roll');

$(document).ready(onReady);

let employees = [];
let monthlyCosts= 0;
let totalBudget;

function onReady() {
    $('#submitBrn').on('click' , onSubmitEmployee);
    //listener for submit button
}


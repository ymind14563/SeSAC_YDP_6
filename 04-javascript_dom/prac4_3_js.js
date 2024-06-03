const value1 = document.querySelector(`#value1`);
const value2 = document.querySelector(`#value2`);
const operator = document.querySelector(`#operator`);
const result = document.querySelector(`#result`);
        
    
    
let cal_result;
function cal() {
first_value = Number(value1.value);
second_value = Number(value2.value);
operator_value = operator.value;

switch(operator_value) {
    case "+" : cal_result = first_value + second_value;
    break;
    case "-" : cal_result = first_value - second_value;
    break;
    case "*" : cal_result = first_value * second_value;
    break;
    case "/" : cal_result = first_value / second_value;
    break;
    default :
    cal_result = "유효하지 않음.";
}

result.value = cal_result;

}

function resetInput() {
value1.value = ``;
value2.value = ``;
operator.value = ``;
result.value = ``;
}
// Write your solution in this file!
const employee = {
    name: "Steve",
    streetAddress: "1 Broadway"
}
updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let myEmployee = {...employee};
    myEmployee[key] = value;
    return myEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
     return employee 
}
function deleteFromEmployeeByKey(employee, key) {
    let myEmployee = {...employee};
    delete myEmployee[key]
    return myEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}

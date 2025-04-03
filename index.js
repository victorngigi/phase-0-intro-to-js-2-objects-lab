// Write your solution in this file!
let employee = {
    name: "",
    streetAddress: ""
}
updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}
destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}
deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}
destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key]
    return employee
}

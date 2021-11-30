const Employee = require('../lib/Employee')

test("creates an employee object", () => {
    const employee = new Employee('Monika', 123456, 'monika.kothari@gmail.com');
    //expect(typeof(employeeObject)).toBe("object");
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("gets employee name", () => {
    const employee = new Employee('Monika', 123456, 'monika.kothari@gmail.com');
    
    expect(employee.getName()).toEqual(expect.any(String));
})

test("gets employee id", () => {
    const employee = new Employee('Monika', 123456, 'monika.kothari@gmail.com');
    
    expect(employee.getId()).toEqual(expect.any(Number));
})

test("gets employee email", () => {
    const employee = new Employee('Monika', 30, 'monika.kothari@gmail.com');
    
    expect(employee.getEmail()).toEqual(expect.any(String));
})

test("gets employee role", () => {
    const employee = new Employee('Monika', 30, 'monika.kothari@gmail.com');
    
    expect(employee.getRole()).toEqual("Employee");
})

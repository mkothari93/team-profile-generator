const Manager = require('../lib/Manager')

test("creates an Manager object", () => {
    const manager = new Manager('Monika', 123456, 'monika.kothari@gmail.com', 6306306301);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets Manager office number", () => {
    const manager = new Manager('Monika', 123456, 'monika.kothari@gmail.com', 6306306301);
    
    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
})


test("gets Manager role", () => {
    const manager = new Manager('Monika', 123456, 'monika.kothari@gmail.com', 6306306301);
    
    expect(manager.getRole()).toEqual("Manager");
})
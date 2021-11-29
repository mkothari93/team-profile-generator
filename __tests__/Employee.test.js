const { expect } = require('@jest/globals');
const { string, number } = require('yargs');
const Employee = require('./lib/Employee')

test ('creates a employee object', () => {
    const employee = new Employee('Monika', '12345', 'mkothari.1993@gmail.com');

    expect(employee.name).toEqual(expect.any(string));
    expect(employee.id).toEqual(expect.any(number));
    expect(employee.email).toEqual(expect.any(string));
})
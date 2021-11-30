const Engineer = require('../lib/Engineer')

test("creates an engineer object", () => {
    const engineer = new Engineer('Monika', 123456, 'monika.kothari@gmail.com', 'mkothari93');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})

test("gets Engineer github username", () => {
    const engineer = new Engineer('Monika', 123456, 'monika.kothari@gmail.com', 'mkothari93');
    
    expect(engineer.getGithub()).toEqual(expect.any(String));
})


test("gets Engineer role", () => {
    const engineer = new Engineer('Monika', 123456, 'monika.kothari@gmail.com', 'mkothari93');
    
    expect(engineer.getRole()).toEqual("Engineer");
})

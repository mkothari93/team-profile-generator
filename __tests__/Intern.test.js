const Intern = require('../lib/Intern')

test("creates an Intern object", () => {
    const intern = new Intern('Monika', 123456, 'monika.kothari@gmail.com', 'Northern Illinois University');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})

test("gets Intern school", () => {
    const intern = new Intern('Monika', 123456, 'monika.kothari@gmail.com', 'Northern Illinois University');
    
    expect(intern.getSchool()).toEqual(expect.any(String));
})


test("gets Intern role", () => {
    const intern = new Intern('Monika', 123456, 'monika.kothari@gmail.com', 'Northern Illinois University');
    
    expect(intern.getRole()).toEqual("Intern");
})

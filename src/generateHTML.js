function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>My Team</header>
        <div class="row row-cols-1 row-cols-md-3 g-4" id="container">
          ${renderTeam(data)}
        </div>
      </body>
    </html>
    `;
}

function renderPerson(person) {
    if (person.getRole() === 'Manager') {return `<p class="card-text">Office Number: ${(person.officeNumber)}</p>`}

    if (person.getRole() === 'Engineer') {return `<p class="card-text">GitHub: <a href="https://www.github.com/${(person.github)}" target="_blank">${(person.github)}</a></p>`}

    if (person.getRole() === 'Intern') {return `<p class="card-text">School: ${(person.school)}</p>`}
};


function renderTeam(data){
    let output = "";
    data.forEach(person => {
        output += `<div class="col">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title text-center rounded-3 p-2">${(person.name)}</h2>
            <h4 class="card-title text-center pb-2">${(person.getRole())}</h4>
            <p class="card-text">Employee ID: ${(person.id)}</p>
            <p class="card-text">Email: ${(person.email)}</p>
            ${renderPerson(person)}
          </div>
        </div>
      </div>`;
    })

    return output;
}

module.exports = generateHTML;
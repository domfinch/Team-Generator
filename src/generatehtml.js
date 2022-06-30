//create function to filter through global array to figure out manager, intern, engineer. create 3 functions inside of that function to return each specific card (manager,intern, engineer)

function createTeam(teamArr) {

  function addManager(manger) {
    return `  <div class="card" style="width: 16rem">
<h5 class="card-title">Dominic</h5>
<h6 class="card-subtitle mb-2 text-muted">Manager</h6>
<ul>
  <li class="list-group-item">ID: 1</li>
  <li class="list-group-item">Office #: 345</li>
  <li class="list-group-item">
    <a href="mailto:Dominic" class="btn btn-dark">Email</a>
  </li>
</ul>
</div>
`;
  }

  function addEngineer(engineer) {
    return `<div class="card" style="width: 16rem">
      <h5 class="card-title">Jake</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <ul>
        <li class="list-group-item">ID: 2</li>
        <li class="list-group-item">
          <a
            href="https://github.com/domfinch"
            target="_blank"
            class="btn btn-dark"
            >GitHub</a
          >
        </li>
        <li class="list-group-item">
          <a href="mailto:Dominic" class="btn btn-dark">Email</a>
        </li>
      </ul>
    </div>
        `;
  }
  function addIntern(intern) {}
  
}

module.exports = (data) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Generator</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div>
      <header>
        <h1>My Team</h1>
      </header>
    </div>

    <div class="card-group">
    ${createTeam(data)}
    </div>
  </body>
</html>
    `;
};

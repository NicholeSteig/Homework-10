function generateHTML(data) {
    return `<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">My Team</span>
      </nav>

    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Name</h5>
          <h6 class="card-subtitle mb-2 text-muted">position</h6>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">GitHub: </li>
          </ul>
        </div>
      </div>
</body>

</html>`

}

module.exports = generateHTML;
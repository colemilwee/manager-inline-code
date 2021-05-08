const template = (employees) => {
    let webpage = ``
console.log(employees)
    webpage += `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="index.css">
    <title>My Team</title>
    <div class="Container">
    <header>My Team</header>
        <div class="row managers">
    `
    employees.manager.forEach(function callback(v){
        console.log(v)
        webpage += addManagers(v)
    });

    webpage += `
    <div class="row Interns">   `

    employees.intern.forEach(function callback(v){
        webpage += addIntern(v)
    });

    webpage += `
    <div class="row Engineer">   `

    employees.engineer.forEach(function callback(v){
        webpage += addEngineer(v)
    });
    webpage += ` 
    </div>
    </div>
</div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>`
return webpage
}
function addManagers(manager) {
    return `
    <div class="col-8 col-md-6 col-lg-4" >
        <div class="card">
            <div class="card-body">
                ${manager.getName()}
                ${manager.getRole()}
                ${manager.getId()}
                ${manager.getEmail()}
                ${manager.getOffice()}
                
            </div>
        </div>
    </div >
    </div >
    `

}
function addEngineer(engineer) {
    return `
    <div class="col-8 col-md-6 col-lg-4" >
        <div class="card">
            <div class="card-body">
                ${engineer.getName()}
            ${engineer.getRole()}
            ${engineer.getId()}
            ${engineer.getEmail()}
            ${engineer.getGithub()}
            </div>
        </div>
</div >
</div >
    `

}
function addIntern(intern) {
    return `
    <div class="col-8 col-md-6 col-lg-4" >
        <div class="card">
            <div class="card-body">
                ${intern.getName()}
            ${intern.getRole()}
            ${intern.getId()}
            ${intern.getEmail()}
            ${intern.getSchool()}
            </div>
        </div>
</div >
</div >
    `

}


module.exports = template
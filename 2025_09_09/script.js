//let form = document.querySelector('form');
//let submitButton = document.querySelector("#submit");
//submitButton.addEventListener('click', (event) => {
//    event.preventDefault();
    //const data = Object.fromEntries(new FormData(form).entries());
    //console.log(data);
//    let email = document.getElementById("email").value();
//    let fname = document.getElementById("fname").value();
//    let lname = document.getElementById("lname").value();
//    let password = document.getElementById("password").value();
//    let cpassword = document.getElementById("cpassword").value();

//    let object = {
//        email: email,
//        firstname: fname,
//        lastname: lname,
//        password: password,
//        confirmpassword: cpassword
//    }
//    console.log(object.entries())

//})

function crateTable()
{
    let table = document.createElement("table");
    let tableBody = document.createElement("tableBody");

    for (let i = 0; i < 2; i++)
    {
        let row = document.createElement("tr");

        for (let j = 0; j < 2; i++)
        {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    document.body.appendChild(table);
}
document.querySelector("input[type='button']")
        .addEventListener("click", crateTable);
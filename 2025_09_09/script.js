//let form = document.querySelector('form');
let submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      const container = document.querySelector(".container");
      const keys = ["email", "vnev", "knev", "pass", "cpass"]
        createTable(data, container, keys);
//    const data = Object.fromEntries(new FormData(form).entries());
//    console.log(data);
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

})

const createTable = (data, container, keys) => {
    let table = document.createElement("table");
    table.append(createTableHead(keys));
    container.append(table);
}

const createTableHead = (data) => {
  let tableHead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (let item of data)
  {
      tr.append(createTh(data));
  }
}

const createTh = () => {
    let th = document.createElement("th");
    let tr = document.createElement("tr");
    th.textContent = data;
    return th;
}

//function crateTable()
//{
//    let table = document.createElement("table");
//    let tableBody = document.createElement("tableBody");
//
//    for (let i = 0; i < 2; i++)
//    {
//        let row = document.createElement("tr");
//
//        for (let j = 0; j < 2; i++)
//        {
//            let cell = document.createElement("td");
//            let text = "asd";
//            cell.appendChild(text);
//            row.appendChild(cell);
//       }
//        tableBody.appendChild(row);
//    }
//    table.appendChild(tableBody);
//    document.body.appendChild(table);
//}
//document.querySelector("input[type='button']")
//        .addEventListener("click", crateTable);
let submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      let form = document.querySelector('form');
      const data = Object.fromEntries(new FormData(form).entries());
      const container = document.querySelector(".container");
      const keys = ["email", "vnev", "knev", "pass", "cpass"]
      createTable(data, container, keys);
      form.reset();
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
  tr.append(createTh(data));
}

const createTh = () => {
    let th = document.createElement("th");
    let tr = document.createElement("tr");
    th.textContent = data;
    return th;
}

const createTableBody = (data) => {
  let tableBody = document.createElement("tableBody");
  let tr = document.createElement("tr");
  for (let element of Object.values(data))
  {
      tr.appendChild(createTd(element));
  }
  tableBody.appendChild(tr);
  return tableBody;
}

const createTd = (data) => {
  let td = document.createElement("td");
  td.textContent = data;
  return td;
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
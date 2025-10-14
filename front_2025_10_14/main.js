const toDo = document.querySelector("#toDo")
const card = document.createElement("div");
const cardBody = document.createElement("div");
const addBtn = document.querySelector("#btn")
function addCard()
{
    card.classList.add("card");
    cardBody.classList.add("card-body");

    card.appendChild(cardBody);
    toDo.appendChild(card);
}
const toDo = document.querySelector(".toDo");
const addBtn = document.querySelector(".btn");
function addCard()
{
    const card = document.createElement("div");
    const cardBody = document.createElement("div");

    card.classList.add("card");
    cardBody.classList.add("card-body");

    cardBody.textContent = document.querySelector(".input").value;

    card.appendChild(cardBody);
    toDo.appendChild(card);
}

addBtn.addEventListener("click", addCard)
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addCard();
});
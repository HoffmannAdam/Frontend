const toDo = document.querySelector(".toDo");
const addBtn = document.querySelector(".btn");
const inputText = document.querySelector(".input")
function addCard()
{
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardDeleteButton = document.createElement("button");
    const cardFavouriteButton = document.createElement("button");

    card.classList.add("card");
    cardBody.classList.add("card-body");
    cardDeleteButton.classList.add("btn");
    cardDeleteButton.classList.add("btn-danger");
    cardFavouriteButton.classList.add("btn");
    cardFavouriteButton.classList.add("btn-warning");

    cardBody.textContent = inputText.value;
    cardDeleteButton.textContent = "Törlés";
    cardFavouriteButton.textContent = "Kedvenc";

    card.appendChild(cardBody);
    cardBody.appendChild(cardDeleteButton);
    cardBody.appendChild(cardFavouriteButton);
    toDo.appendChild(card);
}


addBtn.addEventListener("click", addCard);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addCard();
});

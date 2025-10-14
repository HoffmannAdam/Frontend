const toDo = document.querySelector(".toDo");
const addBtn = document.querySelector(".btn");
const inputText = document.querySelector(".input")
function addCard()
{
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardText = document.createElement("p");
    const cardDeleteButton = document.createElement("button");
    const cardFavouriteButton = document.createElement("button");

    card.classList.add("card");
    cardBody.classList.add("card-body");
    cardText.classList.add("card-text");
    cardDeleteButton.classList.add("btn", "btn-danger");
    cardFavouriteButton.classList.add("btn", "btn-warning");

    cardText.textContent = inputText.value;
    cardDeleteButton.textContent = "Törlés";
    cardFavouriteButton.textContent = "Kedvenc";

    card.appendChild(cardBody);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardDeleteButton);
    cardBody.appendChild(cardFavouriteButton);
    toDo.appendChild(card);

    inputText.value = "";

    cardDeleteButton.addEventListener("click", () => card.remove());
    //cardFavouriteButton.addEventListener("click", () => card.style.color = "yellow");
    cardFavouriteButton.addEventListener("click", (e) => {
       e.preventDefault();
       card.style.color = "yellow";
    });
}

addBtn.addEventListener("click", addCard);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addCard();
        e.preventDefault();
    }
});

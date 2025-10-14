const kanBan = document.querySelector(".kanBan");
const addBtn = document.querySelector(".btn");
const inputText = document.querySelector(".input");

const container = document.createElement("div");
const row = document.createElement("row");
const toDoCol = document.createElement("div");
const favCol = document.createElement("div");
const delCol = document.createElement("div");

container.classList.add("container-fluid", "text-center");
row.classList.add("row");
toDoCol.classList.add("col");
favCol.classList.add("col");
delCol.classList.add("col");

toDoCol.textContent = "To do:";
favCol.textContent = "Kedvencek:";
delCol.textContent = "Kuka:";

container.appendChild(row);
row.appendChild(toDoCol);
row.appendChild(favCol);
row.appendChild(delCol);
kanBan.appendChild(container);

function cardFunction()
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
    toDoCol.appendChild(card);

    inputText.value = "";

    cardDeleteButton.addEventListener("click", (e) => {
        e.preventDefault();
        card.remove();
        delCol.appendChild(card);
    })
    cardFavouriteButton.addEventListener("click", (e) => {
       e.preventDefault();
       card.remove();
       favCol.appendChild(card);
    });
}

addBtn.addEventListener("click", cardFunction);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        cardFunction();
    }
});

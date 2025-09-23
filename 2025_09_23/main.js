const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const fuliumData = Array.from({ length: 20 }, (_, index) => {
        const value = Math.floor(Math.random() * 10000) + 1;
        return {
            id: index + 1,
            value: value,
            type: value % 2 === 0 ? "páros" : "páratlan",
            category: value < 3000 ? 'szegények pénze': (value >=3000 && value <6000  ) ? "középosztály pénze" : "gazdagok pénze"
        };
    });



})
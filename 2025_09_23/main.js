const submitButton = document.querySelector('.btn');
const categorySelect = document.getElementById('categorySelect');
const minValueInput = document.getElementById('minValue');
const maxValueInput = document.getElementById('maxValue');
const tableBody = document.querySelector('tbody');

const footer = document.querySelector('footer');

let fuliumData = [];

function generateData() {
    return Array.from({ length: 20 }, (_, index) => {
        const value = Math.floor(Math.random() * 10000) + 1;
        return {
            id: index + 1,
            value: value,
            type: value % 2 === 0 ? "páros" : "páratlan",
            category: value < 3000 ? 'szegények pénze' :
                value < 6000 ? "középosztály pénze" : "gazdagok pénze"
        };
    });
}

function updateTable(data) {
    tableBody.innerHTML = '';
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.value}</td>
            <td>${item.type}</td>
            <td>${item.category}</td>
        `;
        tableBody.appendChild(row);
    });
}


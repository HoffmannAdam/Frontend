document.addEventListener('DOMContentLoaded', () => {
    const fuliumData = Array.from({ length: 20 }, (_, index) => {
        const value = Math.floor(Math.random() * 10000) + 1;
        return {
            id: index + 1,
            value: value,
            type: value % 2 === 0 ? "páros" : "páratlan",
            category: value < 3000 ? 'szegények pénze': (value >=3000 && value <6000  ) ? "középosztály pénze" : "gazdagok pénze"
        };
    });
    const tableBody = document.querySelector('#fulium-table tbody');
    renderTable(fuliumData, tableBody);

    document.querySelector('#apply-filters').addEventListener('click', (e) => {
        e.preventDefault();
        tableBody.innerHTML = '';
        filter(fuliumData, tableBody);
    })
})

const renderTable = (data, tbody) => {
    data.forEach(item  => {
        const row = document.createElement('tr');
        row.append(createTd(item.id), createTd(item.value), createTd(item.type), createTd(item.category))
        tbody.append(row);
    })
}

const createTd = (data) => {
    const td = document.createElement('td');
    td.innerText = data;
    return td;
}

const filter = (data, tbody) => {
    let filteredData = [...data];
    const selectedValue = document.querySelector('#category-filter').value;
    if (selectedValue !== 'all')
    {
        filteredData = filteredData.filter(item => item.category === selectedValue);
    }
    const minValue = parseInt(document.querySelector('#min-value').value) || 0;
    const maxValue = parseInt(document.querySelector('#max-value').value) || Infinity;

    filteredData = filteredData.filter(item => item.value >= minValue && item.value <= maxValue);

    renderTable(filteredData, tbody);
}
'use strict';

const items = [
    'Walmart',
    'State Group',
    'Sinopec Group',
    'China National Petroleum',
    'Royal Dutch Shell',
    'Toyota Motor',
    'Volkswagen',
    'BP',
    'Exxon Mobil',
    'Berkshire Hathaway'
];

const app = {
    init: function init() {
        this.table = document.querySelector('#table');
        this.form = document.querySelector('#form');
        this.input = document.querySelector('#phrase');

        this.form.addEventListener('submit', this.getPhrase);

        return this;
    },

    populateTable: function populateTable(items) {
        items.forEach(el => {
            const tableRow = document.createElement('tr');
            tableRow.classList.add('table__row');
            const tableData = document.createElement('td');
            tableData.classList.add('table__data');
            tableData.innerHTML = el;

            tableRow.appendChild(tableData);
            this.table.appendChild(tableRow);
        });

        return this;
    },

    getPhrase: function (event) {
        event.preventDefault();
        const phrase = app.input.value.toLowerCase();
        app.filterTable(phrase);
        app.input.value = '';
    },

    filterTable: function filterTable(phrase) {
        const filteredItems = items.filter(el => {
            return el.toLowerCase().includes(phrase);
        });

        this.table.innerHTML = '';
        this.populateTable(filteredItems);
    }

};

app.init().populateTable(items);

//add event listeners for product selection

const shirtPriceElement = document.getElementById('shirtPrice');
const shirtSizeSelector = document.getElementById('shirtSizeSelector');

shirtSizeSelector.addEventListener('change', function(event) {
    const selectedShirtPrice = event.target.value;
    shirtPriceElement.textContent = `$${selectedShirtPrice}`;
});

const pantsPriceElement = document.getElementById('pantsPrice');
const pantsSizeSelector = document.getElementById('pantsSizeSelector');

pantsSizeSelector.addEventListener('change', function(event) {
    const selectedPantsPrice = event.target.value;
    pantsPriceElement.textContent = `$${selectedPantsPrice}`;
});
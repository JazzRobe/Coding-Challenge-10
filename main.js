//task 2: add event listeners for product selection

const priceElement = document.getElementById('shirtPrice');
const sizeSelector = document.getElementById('sizeSelector');

sizeSelector.addEventListener('change', function(event) {
    const selectedPrice = event.target.value;
    priceElement.textContent = `$${selectedPrice}`;
}); //changes the displayed price of product when clicking different size


//task 3: handle stock availability

let shirtsInventory = 5;
const shirtStock = document.getElementById("shirtStock");
const purchaseShirtButton = document.getElementById("purchaseShirtButton");

function updateStock() {
    if (shirtsInventory > 0) {
        purchaseShirtButton.disabled = false;
        shirtsInventory.textContent = `In Stock: ${shirtsInventory}`;
    } else {
        purchaseShirtButton.disabled = true;
        shirtsInventory.textContent = 'Out of stock'
    }
};

purchaseShirtButton.addEventListener("click", () => {
    shirtsInventory--;
    updateStock();
});

updateStock();
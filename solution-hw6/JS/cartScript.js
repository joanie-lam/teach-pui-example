const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};

const packPriceAdaptation = {
    '1' : 1,
    '3' : 3,
    '6' : 5,
    '12': 10
};

const glazePriceAdpatation = {
    'Keep Original' : 0 ,
    'Sugar Milk': 0 ,
    'Vanilla Milk' : 0.5,
    'Double Chocolate' : 1.5
};

const cart = new Set();
const tempCart = new Set();

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice){
        this.type = rollType;
        this.glazing = rollGlazing;
        this.packSize = packSize;
        this.basePrice = rollPrice;
        this.elemnt = null;
    }
};

let cartArrayString = localStorage.getItem("userCart");
let cartArray = JSON.parse(cartArrayString);
console.log(cartArray);

if (cartArray!=null) {
    for (const cartItem of cartArray) {
        createElement(cartItem);
    }
};

// let OriginalRoll = new Roll('Original', 'Sugar Milk', Number(1), Number(2.49));
// let WalnutRoll = new Roll('Walnut', 'Vanilla Milk', Number(12), Number(3.49));
// let RaisinRoll = new Roll('Raisin', 'Sugar Milk', Number(3), Number(2.99));
// let AppleRoll = new Roll('Apple', 'Original', Number(3), Number(3.49));
// cart.add(AppleRoll);
// cart.add(RaisinRoll);
// cart.add(WalnutRoll);
// cart.add(OriginalRoll);


function createElement(cartItem){
    // const container = document.querySelector('.item-container');
    // const clone = container.cloneNode(true);
    // cartItem.element = clone.querySelector('.cart_item');
    // const deleteButton = cartItem.element.querySelector('.remove_button');

    const template = document.querySelector('#cart-template');
    const clone = template.content.cloneNode(true);
    cartItem.element = clone.querySelector('.item-container');
    const deleteButton = cartItem.element.querySelector('.remove_button');



    deleteButton.addEventListener('click', () => {
        deleteCart(cartItem);
        displayCost(cartItem);

    });

    const cartItemElement = document.querySelector('.column_paragraph_right')

    for (let i of cartArray) {
        cartItemElement.prepend(cartItem.element);
        updateElement(cartItem);
    };

    displayCost(cartItem);

};

function updateElement(cartItem) {
    const cartImg = cartItem.element.querySelector('.item-img');
    const cartType = cartItem.element.querySelector('#item-name');
    const cartGlaze = cartItem.element.querySelector('#item-glaze');
    const cartPack = cartItem.element.querySelector('#item-pack');
    const cartPrice = cartItem.element.querySelector('.item-price');
    const glazeValue = cartItem.glazing;
    const packValue = cartItem.packSize;
    const calculatePriceCell = (glazePriceAdpatation[glazeValue] + Number(cartItem.basePrice)) * packPriceAdaptation[packValue];
    let perPriceCell = Number(calculatePriceCell.toFixed(2));

    cartImg.src = "./products/" + rolls[cartItem.type].imageFile;
    cartType.innerText=cartItem.type + " Cinnamon Roll";
    cartGlaze.innerText="Glazing: " + cartItem.glazing;
    cartPack.innerText="Pack Size:" + cartItem.packSize;
    cartPrice.innerText="$ " + perPriceCell;

};



function deleteCart(cartItem) {
    cartItem.element.remove();
    console.log(cartArray);
    for (let i=0; i < cartArray.length; i++){
        if(cartArray[i] == cartItem) {
            // remove the cartItem from the cartArray
            cartArray.splice(i, 1);
        }
    }

    // cart.delete(cartItem);
    // Use the JavaScript function JSON.stringify() to convert it into a string.
    const cartArrayString = JSON.stringify(cartArray);
    // The result will be a string following the JSON notation.
    // cartArrayString is now a string, and ready to be sent to a server:
    localStorage.setItem("userCart", cartArrayString);
    console.log(localStorage);
}

function displayCost(cartItem) {
    let totalCost = 0;
    for(let i of cartArray) {
        let eachPrice = (glazePriceAdpatation[i.glazing] + i.basePrice) * packPriceAdaptation[i.packSize];
        totalCost = totalCost + Number(eachPrice.toFixed(2));
    }
    const cartTotalCost = document.querySelector('#total-cost');
    cartTotalCost.innerText = "$" + totalCost.toFixed(2);
}   
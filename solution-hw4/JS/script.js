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

var allProducts = {
      product: 'original-cinnamon-roll',
      basePrice: 2.49, 
      glaze: [0, 0, 0.5, 1.5],
      pack: [1, 3, 5, 10],
};


// hw4:
// First, we get the query string from the URL. This is the list of parameters
// that begins with a question mark. (These are known as "search parameters")
const queryString = window.location.search;
console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll');
console.log(params);
console.log(chosenRoll);



function displayTotalCost(s) {
    let costElement = document.querySelector("#cost");
    costElement.innerText = "$" + s;
}


const Glazing = document.querySelector("#glazing");
const Pack = document.querySelector("#pack");

let basePrice = Number(rolls[chosenRoll].basePrice);
let chosenGlazing = "KeepOriginal";
let chosenPack = "1";
let priceTag = document.querySelector("#cost");
priceTag.innerText = "$" + basePrice;



// Assign the Glazing and pack option values.
for (i=0; i < allProducts.glaze.length; i++){
    Glazing.options[i].value = allProducts.glaze[i];
    Pack.options[i].value = allProducts.pack[i];
}

function glazingChange(ele) {
    // In this function, `this` corresponds to the select
    // element. So `this.value` will contain the value of the
    // selected option as a string.
    // console.log('You selected ' + this.value);
    // We need to convert the string value to an integer
    let glazingAdaption = Number(ele.value);
    let single_price = basePrice + Number(glazingAdaption);
    let total = (single_price * Number(Pack.value)).toFixed(2);
    console.log(total);
    chosenGlazing = Glazing.options[Glazing.selectedIndex].text;
    displayTotalCost(total);
}

function packChange(ele) {
    let packSize = Number(ele.value);
    let single_price = basePrice + Number(Glazing.value);
    let total = (single_price * packSize).toFixed(2);
    // console.log(total);
    chosenPack = Pack.options[Pack.selectedIndex].text;
    displayTotalCost(total);
}




// update the Detail page
let cart = [];

// Update the header text
const headerElement = document.querySelector('#p1');
headerElement.innerText = chosenRoll + ' Cinnamon Roll';
// Finally, we can access the parameter we want using the "get" method:


// Update the image
const rollImage = document.querySelector('.product-detail-img');
rollImage.src = './products/' + rolls[chosenRoll].imageFile;


// Update the base price
priceTag.innerText = '$' + basePrice;

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice){
        this.type = rollType;
        this.glazing = rollGlazing;
        this.packSize = packSize;
        this.basePrice = basePrice;
    }
}

const BOXCart = document.querySelector('.addtocart');
BOXCart.onclick = function clickCart() {
    order = new Roll(chosenRoll, chosenGlazing, chosenPack, basePrice);
    console.log(order);
    cart.push(order);
    console.log(cart);
}

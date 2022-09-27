var allProducts = {
      product: 'original-cinnamon-roll',
      basePrice: 2.49, 
      glaze: [0, 0, 0.5, 1.5],
      pack: [1, 3, 5, 10],
};

function displayTotalCost(s) {
    let costElement = document.querySelector("#cost");
    costElement.innerText = "$" + s;
}

const Glazing = document.querySelector("#glazing");
const Pack = document.querySelector("#pack");

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
    let single_price = Number(allProducts.basePrice+glazingAdaption);
    let total = (single_price * Number(Pack.value)).toFixed(2);
    // console.log(final);
    displayTotalCost(total);
}

function packChange(ele) {
    let packSize = Number(ele.value);
    let single_price = allProducts.basePrice + Number(Glazing.value);
    let total = (single_price * packSize).toFixed(2);
    // console.log(total);
    displayTotalCost(total);
}

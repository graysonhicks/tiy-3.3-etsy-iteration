(function(){
  'use strict';

//1.  Show me how to calculate the average price of all items. Please console.log the average.

var pricesArray = items.map(function(currentValue, index, array){ // get all prices from each object in items array
    console.log(currentValue.price);
    return currentValue.price;
});

var pricesSum = pricesArray.reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue; //add all of these prices together
});

var priceAverage = (parseFloat((pricesSum / pricesArray.length)).toFixed(2)); //average them

console.log(priceAverage);

//2. Show me how to get an array of items that cost between $14.00 and $18.00 USD

function thePriceIsRight(obj){ // this is function used to filter by price
  if("price" in obj && obj.price > 14) { //if the obj has a 'price' prop and it is greater than $14
    if(obj.price < 18) { // then check if obj price is also less than $18
      return true; //if both of these are true, then return true
    } else {
      return false; // more than $18
    }
  } else {
    return false; // less than $14
  }
}

var goldilocksPrices = items.filter(thePriceIsRight); //if returns true, then add to goldilocksPrices array
console.log("Items that cost between $14.00 USD and $18.00 USD: ", goldilocksPrices); //print matching objects

//3. hasOwnProperty for gbp?

var gbpItem = items.map(function(currentValue, index, array){

      if(currentValue.currency_code == "GBP"){ // if the current items currency_code is GBP
      console.log(currentValue.title + " costs " + currentValue.price); // then get its name and price and print to screen
      return currentValue;
    }
});

//4. items made of wood

var woodItems = items.map(function(currentValue, index, array){

      var materialsLength = currentValue.materials.length; // use this as counter for each item

      for(var i = 0; i < materialsLength; i++) {

        if(currentValue.materials[i] == "wood"){ // if "wood" is listed in any of the materials properties
        console.log(currentValue.title); // then get its name and price and print to screen
        return currentValue.title; // this pushes to the woodItems array above
    }
  }
});

console.log(woodItems); // print woodItems array

//5. items made of 8 or more materials
//  filter?

var manyMaterialsArray = items.filter(hasAtLeastEightMaterials);  //filter using function

function hasAtLeastEightMaterials(items){ // function only returns true if more than 8 materials
      if(items.materials.length >= 8){
        return true;
      } else {
        return false;
      }
}

function printCurrentMaterials(element, index, array){
  console.log(element.title);                           //prints title
  for (var i = 0; i < element.materials.length; i++) {
    console.log(element.materials[i]);               //prints each material
  }

}

manyMaterialsArray.forEach(printCurrentMaterials); //calls the printfunction on the filtered array


//6. filter by how many were made by their sellers

var handMadeArray = items.filter(handMadeFunction);

function handMadeFunction(items){
    if(items.who_made == "i_did") {
      return true;
    } else {
      return false;
    }
}

console.log(handMadeArray.length + " items were made by their sellers.");




}());

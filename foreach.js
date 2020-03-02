const donuts = ['chocolate', 'red velvet', 'custard', 'jam', 'lemon'];

// iterate through all array elements
donuts.forEach(function(donutElement){
    console.log(donutElement);
});

// iterate through all array elements with string interpolation
donuts.forEach(function(donutElement, i, donutArray){
    console.log(`Donut option ${i + 1} is ${donutArray[i]}`);
});






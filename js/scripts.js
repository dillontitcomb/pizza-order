//backend logic
var toppingsArray = [""];
var pizzaCost = 0;

function Pizza (size, sauce, toppings) {
	this.size = size;
	this.sauce = sauce;
	this.toppings = toppings;
}

var getToppingsArray = function() {
	$("input:checkbox[name=pizza-toppings]:checked").each(function() {
	var pizzaTopping = $(this).val();
	toppingsArray.push(pizzaTopping);
	});
};

Pizza.prototype.cost = function () {
	alert(this.size);
	if (this.size === "small") {
			pizzaCost += 10;
		} else if (this.size === "medium") {
			pizzaCost += 13;
		} else if (this.size === "large") {
			pizzaCost += 16;
	}
	if (this.sauce === "pesto") {
			pizzaCost += 2;
		} else if (this.sauce === "evoo") {
			pizzaCost += 3
	}
}

//frontend logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
		event.preventDefault();
		inputSize = $("#pizza-size").val();
		inputSauce = $("#pizza-sauce").val();
		getToppingsArray();
		var newPizza = new Pizza(inputSize, inputSauce, toppingsArray);
		newPizza.cost();
		console.log(newPizza);
		alert(pizzaCost);
		alert(inputSize + inputSauce + toppingsArray);
	});
});

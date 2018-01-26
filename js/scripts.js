//backend logic

function Pizza (sauce, toppings, size, cost) {
	this.sauce = sauce;
	this.toppings = toppings;
	this.size = size;
	this.cost = cost;
}

var getToppingsArray = function () {
	$("input:checkbox[name=pizza-toppings]:checked").each(function() {
		var pizzaTopping = $(this).val();
		toppingsArray.push(pizzaTopping);
	});
};



//frontend logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
		event.preventDefault();
		var toppingsArray = [];
		inputSize = $("#pizza-size").val();
		inputSauce = $("#pizza-sauce").val();
		getToppingsArray();
		alert("hi!");
		alert(inputSize + inputSauce + toppingsArray);
	});
});



		// var newPizza = new Pizza(inputSauce, arrayToppings, inputSize, calculatedCost);

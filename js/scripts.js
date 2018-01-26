//backend logic
var toppingsArray = [];
var pizzaCost = 0;

//Pizza object constructor
function Pizza (size, sauce, toppings) {
	this.size = size;
	this.sauce = sauce;
	this.toppings = toppings;
}

//Topping object constructor
function Topping (name, type) {
	this.name = name;
	this.type = type;
	this.cost = 0;
}

//Gives cost attribute to Topping instances
Topping.prototype.charge = function () {
	if (this.type === "meat") {
		this.cost += 2;
		} else {
		this.cost += 1;
		}
}

//Creates array of all Topping instances with their name, type, and cost variables set
var createToppings = function () {
	$("input:checkbox[name=pizza-toppings]:checked").each(function() {
		var pizzaTopping = $(this).val();
		if (pizzaTopping === "pepperoni" || pizzaTopping === "sausage" || pizzaTopping === "bacon" || pizzaTopping === "salami") {
			var toppingType = "meat";
			}	else {
			var toppingType = "veggie";
			}
		var newTopping = new Topping(pizzaTopping, toppingType);
		newTopping.charge();
		toppingsArray.push(newTopping);
	});
};

//Creates size, sauce, and toppings variables needed to create Pizza object
var getInputs = function() {
	inputSize = $("#pizza-size").val();
	inputSauce = $("#pizza-sauce").val();
	createToppings();
	};

//Calculates cost of pizza based on pizza size, sauce, and topping type
Pizza.prototype.cost = function () {
	if (this.size === "small") {
			pizzaCost += 10;
		} else if (this.size === "medium") {
			pizzaCost += 13;
		} else if (this.size === "large") {
			pizzaCost += 16;
	}
	if (this.sauce === "pesto") {
			pizzaCost += 2;
		} else if (this.sauce === "olive oil") {
			pizzaCost += 3
		}
	toppingsArray.forEach(function(item) {
		pizzaCost += item.cost;
	});
}

//Displays details of pizza order and the charge to the customer
Pizza.prototype.display = function () {
	var displayArray = [];
	this.toppings.forEach(function(item) {
		displayArray.push(item.name);
	});
	$("#ingredients").text(displayArray.join(", "));
	$("#size").text(this.size);
	$("#base").text(this.sauce);
	$("#pizza-cost").text(pizzaCost);
	$("form#pizza-order").hide();
	$(".pizza-order-results").show();
};

//frontend logic
$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
		event.preventDefault();
		getInputs();
		var newPizza = new Pizza(inputSize, inputSauce, toppingsArray);
		newPizza.cost();
		newPizza.display();
		toppingsArray = [];
		pizzaCost = 0;
		$("button#reorder").click(function() {
			$(".pizza-order-results").hide();
			$("form#pizza-order").show();
		});

	});

});

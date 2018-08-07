var budgetController = (function() {

	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	}


})();




var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type', // Will be either 'inc' or 'exp'
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	}

	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value, // Will be either 'inc' or 'exp'
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.inputValue).value
			};
		},
		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();

var controller = (function(budgetCtrl, UICtrl) {

	var setupEventListeners = function() {
		var DOM = UICtrl.getDOMstrings();
	
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	var ctrlAddItem = function() {
		var input = UICtrl.getInput();
	};

	return {
		init: function() {
			console.log('App has started');
			setupEventListeners();
		}
	}

})(budgetController, UIController);

controller.init();









angular.module('app', []);

angular.module('app').controller('todoCtrl', function ($scope){
	
	$scope.sort = 'priority';
	
	$scope.newTodo = {};
	$scope.todos = [];

	$scope.addTodo = function () {

		$scope.todos.push($scope.newTodo);
		$scope.newTodo = {};

	};

	$scope.getTodoClass = function(todo) {

		var a;
		a = parseInt(todo.priority);

	switch(a) {
		case 1:
			return 'danger';
		case 2:
			return 'warning';
		case 3:
			return 'info';
		}
	};

});
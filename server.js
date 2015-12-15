var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Take exam',
	completed: true
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// Get /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// get /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id, 10);
	var foundTodo;

	todos.forEach(function (todo) {
		if (todoId === todo.id) {
			foundTodo = todo;
		}
	});

	if (foundTodo) {
		res.json(foundTodo);
	} else {
		res.status(404).send();
	}
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
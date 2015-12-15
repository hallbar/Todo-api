var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

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

app.post('/todos', function (req, res) {
	var body = req.body;

	body.id = todoNextId;
	todoNextId += 1;
	todos.push(body);

	res.json(body);
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});
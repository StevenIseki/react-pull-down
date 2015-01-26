var Todo = React.createClass({displayName: "Todo",
	getInitialState: function() {
    return {
      todos: this.props.todos,
      todoText: 'What needs to be done?'
    };
  },
  addTodo: function(text) {
    this.setState({
      todoText: text
    });
    var newTodos = this.state.todos.slice();    
    newTodos.push({id: this.state.todos.length + 1, completed: false, title: text});
    this.setState({
      todos: newTodos
    });
  },
  toggleComplete: function(id) {
    var newTodos = this.state.todos.map(function(todo) {
      return {
        id: todo.id,
        completed: (todo.id === id ? !todo.completed : todo.completed),
        title: todo.title
      };
    });        
    this.setState({
      todos: newTodos
    });
  },
  setAllComplete: function(value) {
    var newTodos = this.state.todos.map(function(todo) {
      return { 
      	id: todo.id, 
      	completed: value, 
      	title: todo.title };
    });
    this.setState({
      todos: newTodos
    });
  },
	render: function() {
		return (
			React.createElement("div", {className: "todo"}, 
			
				React.createElement(TodoInput, {
				  todoText: this.state.todoText, 
				  onaddTodo: this.addTodo}), 

				React.createElement(TodoList, {
				  todos: this.state.todos, 
				  onToggleComplete: this.toggleComplete, 
				  onSetAllComplete: this.setAllComplete}
				)
			)
		)
	}
});

var TODOS = [
  { id: 0, completed: false, title: 'this is the first todo' },
  { id: 1, completed: false, title: 'this is the senond todo' }
];

React.renderComponent(React.createElement(Todo, {todos: TODOS}), document.getElementById("container"));




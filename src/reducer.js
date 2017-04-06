
const types = {
	ADD_TODO: 'ADD_TODO',
	TOOGLE_TODO: 'TOOGLE_TODO',
	REMOVE_TODO: 'REMOVE_TODO',
}

const initialState = {
	todos: [
	{id: 1, name: 'Learn React', isComplete: false},
	{id: 2, name: 'Learn Redux', isComplete: true},
	{id: 3, name: 'Learn ReactNative ', isComplete: false},
	{id: 4, name: 'Learn NodeJS', isComplete: false}
	],
	currentTodo: ''
};

export default (state = initialState, action) => {

	return state;
};

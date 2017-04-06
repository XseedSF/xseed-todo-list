
const generateId = () => Math.floor(Math.random()*1000000) 

const types = {
	ADD_TODO: 'ADD_TODO',
	TOOGLE_TODO: 'TOOGLE_TODO',
	REMOVE_TODO: 'REMOVE_TODO',
	CHANGE_INPUT: 'CHANGE_INPUT',
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

//***** ACTION CREATORS
export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
    payload: text
  };
};

export const changeInput = (text) => {
  return {
    type: types.CHANGE_INPUT,
    payload: text
  };
};

export default (state = initialState, action) => {

	if(action.type === types.ADD_TODO) {
		const newId = generateId();
	    const newTodo = { id: newId,  name: action.payload, isComplete: false };
	    /*//Mutando
	    var updatedTodos = this.state.todos;
	    updatedTodos.push(newTodo);*/
	    const updatedTodos = [...state.todos, newTodo];

	    return {
			...state,
			todos: updatedTodos
		}
	}
	if(action.type === types.CHANGE_INPUT) {
		return {
			...state,
			currentTodo: action.payload
		}
	}
	return state;
};

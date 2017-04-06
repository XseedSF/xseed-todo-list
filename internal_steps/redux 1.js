//Instalar Redux
//npm install --save redux
//Instalar react-redux
//npm install --save react-redux

//en index.js importar
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Vamos a crear un nuevo archivo llamado reducer.js
// Definimos la funcion reducer

const initialState = {
	
};

export default (state = initialState, action) => {

	return state;
};

//Lo importamos en index.js 
//creamos el store
//y rodear App con el Provider

import reducer from './reducer'

let store = createStore(reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//Esto es para habilitar Redux Dev Tools

ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
);

//************** PASO 2

// definimos el state inicial en redux.js
const initialState = {
	todos: [
	{id: 1, name: 'Learn React', isComplete: false},
	{id: 2, name: 'Learn Redux', isComplete: true},
	{id: 3, name: 'Learn ReactNative ', isComplete: false},
	{id: 4, name: 'Learn NodeJS', isComplete: false}
	],
	currentTodo: ''
};

//y vamos a declarar los action types
const types = {
	ADD_TODO: 'ADD_TODO',
	TOOGLE_TODO: 'TOOGLE_TODO',
	REMOVE_TODO: 'REMOVE_TODO',
}

//Vamos a modificar TodoList para que use el state del STORE
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
}

const mapDispatchToProps = dispatch => {
  return { 

  };
};

//remover el export del componente
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

//cambiar el import en app.js
import TodoList from './components/TodoList'

//y borrar los todos del state
//ahora todo renderiza pero obvio no funciona


//************* PASO 3
//en reducer.js


//***** ACTION CREATORS
export const addTodo = (text) => {
  return {
    type: types.ADD_TODO,
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
	return state;
};

//En TodoForm importamos el actionCreator y vamos a actualizar el mapDispatchToProps
import { connect } from 'react-redux'
import { addTodo } from '../reducer.js'

const mapStateToProps = (state) => {
  return {
    
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    addTodoLocal: (text) => {
      return dispatch(addTodo(text));
    }
  };
};




{/*<form onSubmit={(evt) => {
		evt.preventDefault();
		props.addTodoLocal(props.currentTodo);
	}
	}>  
</Form>*/}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm); 

//Cambiar el import de App.js



//El currentTodo no lo estamos leyendo del store, vamos a leerlo
// del handleInputChange de app.js vamos a llevarlo al reducer

//reducer.js
const types = {
	ADD_TODO: 'ADD_TODO',
	TOOGLE_TODO: 'TOOGLE_TODO',
	REMOVE_TODO: 'REMOVE_TODO',
	CHANGE_INPUT: 'CHANGE_INPUT',
}

export const changeInput = (text) => {
  return {
    type: types.CHANGE_INPUT,
    payload: text
  };
};
//reducer function
if(action.type === types.ADD_TODO) { --->>> ERROR types
		return {
			...state,
			currentTodo: action.payload
		}
	}

const mapStateToProps = (state) => {
  return {
    currentTodo: state.currentTodo
  };
}

const mapDispatchToProps = dispatch => {
  return { 
    addTodoLocal: (text) => {
      	return dispatch(addTodo(text));
    },
    changeInput: (text) => {
    	return dispatch(changeInput(text));
    }
  };
};

const TodoForm = (props) => {

	const handleChange = (event) => props.changeInput(event.target.value);

	return (
		<form onSubmit={(evt) => {
			evt.preventDefault();
			props.addTodoLocal(props.currentTodo);
		}
		}>
			<input type="text" 
			value={props.currentTodo} 
			onChange={handleChange} />
		</form>
	)
}

// y Vaciamos el TodoForm en App.js. Podemos borrar el currentTodo del state
<TodoForm  />  

//*********** PASO 4






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








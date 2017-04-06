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
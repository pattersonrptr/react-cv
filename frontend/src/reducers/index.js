import { combineReducers } from 'redux';
import contatoReducer from './ContatoReducer';
import objetivoReducer from './ObjetivoReducer';

const rootReducer = combineReducers({
  contato: contatoReducer,
  objetivo: objetivoReducer
});

export default rootReducer;

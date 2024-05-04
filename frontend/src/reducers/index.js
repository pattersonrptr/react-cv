import { combineReducers } from 'redux';
import contatoReducer from './ContatoReducer';

const rootReducer = combineReducers({
  contato: contatoReducer
});

export default rootReducer;

// reducers/contatoReducer.js

import { SET_CONTATO } from '../actions/types';

const initialState = {
  nome: '',
  email: '',
  telefone: '',
  endereco: ''
};

const contatoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTATO:
      return {
        ...state,
        nome: action.payload.nome,
        email: action.payload.email,
        telefone: action.payload.telefone,
        endereco: action.payload.endereco
      };
    default:
      return state;
  }
};

export default contatoReducer;


import { SET_CONTATO } from './types';

export const setContato = (contatoData) => {
  return {
    type: SET_CONTATO,
    payload: contatoData
  };
};

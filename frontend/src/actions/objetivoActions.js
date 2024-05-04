import { SET_OBJETIVO } from './types';

export const setObjetivo = (objetivoData) => {
  return {
    type: SET_OBJETIVO,
    payload: objetivoData
  };
};

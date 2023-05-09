import { createReducer, on } from '@ngrx/store';
import { State } from '../state.models';
import { addCard } from '../actions/custom-cards.actions';

export const initialState: State = {
  customCard: [],
};

export const customcardReducer = createReducer(
  initialState,
  on(addCard, (state, { card }) => ({ customCard: [...state.customCard, card] })),
);

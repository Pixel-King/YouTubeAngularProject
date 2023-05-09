import { createAction, props } from '@ngrx/store';
import { CustomCard } from '../state.models';
//
export const addCard = createAction('[Custom Card] Add new card', props<{ card: CustomCard }>);

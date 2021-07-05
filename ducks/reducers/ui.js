import {
	SET_ASIDE_SHOW,
} from 'ducks/types';

const initialState = {
	showAside: false,
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_ASIDE_SHOW:
			return {
				...state,
				showAside: action.payload
			}

		default:
			return state
	}
}

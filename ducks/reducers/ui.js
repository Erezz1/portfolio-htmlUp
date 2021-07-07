import {
	SET_ASIDE_SHOW,
} from 'ducks/types';

const initialState = {
	showAside: false,
	showSearch: false,
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {

		case SET_ASIDE_SHOW:
			return {
				...state,
				showAside: action.payload
			}

		case SET_ASIDE_SHOW:
			return {
				...state,
				showSearch: action.payload
			}

		default:
			return state
	}
}

import {
	SET_ASIDE_SHOW,
} from 'ducks/types';

// Muestra u oculta la barra lateral
export const setShowAside = (payload) => ({
	type: SET_ASIDE_SHOW,
	payload
})

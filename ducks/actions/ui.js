import {
	SET_ASIDE_SHOW,
} from 'ducks/types';

// Muestra u oculta la barra lateral
export const setShowAside = (payload) => ({
	type: SET_ASIDE_SHOW,
	payload
})

// Cambia el tema al opuesto del que se encuentra (dark / white)
export const setDarkMode = () => {
	const html = document.querySelector('html');
	html.classList.toggle('dark');
}

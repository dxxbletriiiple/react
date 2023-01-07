const initialState = { value: 0 };

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return {
				...state,
				value: ++state.value,
			};
		case 'DEC':
			return {
				...state,
				value: --state.value,
			};
		case 'RND':
			switch (state.value) {
				case 0:
					return { ...state, value: action.payload };
				default:
					return { ...state, value: state.value * action.payload };
			}
		default:
			return state;
	}
};

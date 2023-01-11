const initialState = { counter: 0 };

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return {
				...state,
				counter: ++state.counter,
			};
		case 'DEC':
			return {
				...state,
				counter: --state.counter,
			};
		case 'RND':
			switch (state.counter) {
				case 0:
					return { ...state, counter: action.payload };
				default:
					return { ...state, counter: state.counter * action.payload };
			}
		default:
			return state;
	}
};

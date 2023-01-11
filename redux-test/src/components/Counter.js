import { useSelector, useDispatch } from 'react-redux';
import { inc, dec, rnd } from '../actions';

const Counter = () => {
	const { counter } = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<div className='container'>
			<h1 className='counter'>{counter}</h1>
			<button onClick={() => dispatch(dec())}>Decrement</button>
			<button onClick={() => dispatch(inc())}>Increment</button>
			<button onClick={() => dispatch(rnd())}>Random</button>
		</div>
	);
};

export default Counter;

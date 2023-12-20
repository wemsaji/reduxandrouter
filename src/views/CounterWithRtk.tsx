import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CounterView } from '../components/CounterView';
import { RootState } from '../store';
import { addCount } from '../store/counter';

export const CounterWithRtk = () => {
    const dispatch = useDispatch();
    const count: number = useSelector((store: RootState) => store.counter.count);
    const Increment = useCallback(() => dispatch(addCount(1)), [dispatch]);
    const Decrement = useCallback(() => dispatch(addCount(-1)), [dispatch]);
    return <CounterView title='CounterWithRtk' count={count}
        Increment={Increment} Decrement={Decrement} />;
};

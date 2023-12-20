import { useCallback, useState } from 'react';
import { CounterView } from '../components/CounterView';

export const CounterWithState = () => {
    const [count, setCount] = useState<number>(0);
    const Increment = useCallback(() => setCount(c => ++c), []);
    const Decrement = useCallback(() => setCount(c => --c), []);
    return <CounterView title='CounterWithState' count={count}
        Increment={Increment} Decrement={Decrement} />;
};

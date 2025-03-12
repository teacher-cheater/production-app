import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

interface CounterProps {
    className?: string
}

export const Counter = ({ className }: CounterProps) => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1>
                value =
                {' '}
                {counterValue}
            </h1>
            <Button onClick={increment}>
                increment
            </Button>
            <Button onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};

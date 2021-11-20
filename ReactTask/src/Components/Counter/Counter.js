import './Counter.css';
import { increase, decrease } from '../../Actions/counterAction';
import { useDispatch, useSelector } from 'react-redux';


function Counter(){
    const counter = useSelector((state) => {
        return state.counterReducer
    })
    const dispatch = useDispatch();

    const Increase = () => {
        dispatch(increase());
    }
    const Decrease = () => {
        if(counter > 1){
            dispatch(decrease());
        }
    }
    return(
        <div className="counter-page">
            <div className="counter-value"> 
                {counter}
            </div>
            <div className="counter-action">
                <button onClick={Decrease}>-</button>
                <button onClick={Increase}>+</button>
            </div>
        </div>
    )
}

export default Counter
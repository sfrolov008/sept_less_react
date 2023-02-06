// import {useReducer} from "react";
//
// const TestComponent = () => {
//
//     const reducer = (state, action) => {
//        state = {...state, counter: state.counter+1}
//
//         switch (action.type){
//             case 'inc':
//                 return {...state, count: state.count+1}
//             case 'dec':
//                 return {...state, count: state.count-1}
//             case 'res':
//                 return {count:state.count = 0}
//             default:
//                 return {...state}
//         }
//
//     };
//
//     const initState = () => ({count:0, counter:0})
//
//     const [state, dispatch] = useReducer(reducer, null, initState)
//
//     return (
//         <div>
//             <div>Count: {state.count}</div>
//             <div>Counter: {state.counter}</div>
//             <button onClick={()=>dispatch({type:'inc'})}>inc</button>
//             <button onClick={()=>dispatch({type:'dec'})}>dec</button>
//             <button onClick={()=>dispatch({type:'res'})}>reset</button>
//         </div>
//     );
// };
//
// export {TestComponent};

/*
const TestComponent = () => {

    const [state, setState] = useState(0);

    return (
        <div>
            <div>Count: {state}</div>
            <button onClick={() => setState(state + 1)}>increment</button>
            <button onClick={() => setState(state- 1)}>decrement</button>
            <button onClick={() => setState(state * 0)}>reset</button>
        </div>
    );
};

export {TestComponent};
*/

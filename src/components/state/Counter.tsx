import { useReducer } from "react"

const initialState = { count: 0 }

type StateType = {
    count: number
}
type UpdateAction = {
    type: "increment" | "decrement" 
    payload: number
}
type ResetAction = {
    type : "reset"
}
//this feature is called discriminated unions, allows us to ignore a property if not needed.   

type CounterAction = UpdateAction | ResetAction

const reducer = (state: StateType, action: CounterAction) => {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + action.payload,
            }
        case "decrement":
            return {
                count: state.count - action.payload,
            }
        case "reset":
            return initialState
        default:
            return state
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1> Count : {state.count} </h1>
            <button
                onClick={() => {
                    dispatch({
                        type: "increment",
                        payload: 10,
                    })
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch({
                        type: "decrement",
                        payload: 10,
                    })
                }}
            >
                Decrement
            </button>
            <button onClick={() => {
                dispatch({
                    type: "reset",
                })
            }}>reset</button>
        </div>
    )
}

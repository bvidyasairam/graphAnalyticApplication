const initialState = {
    Xvalue: 0,
    Yvalue: 0
}

const reducerBFunction = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type == "reducerADecrease") {
        newState.Xvalue -= action.data
    }
    else if (action.type == "reducerBDecrease") {
        newState.Yvalue -= action.data
    }
    return newState;
}

export default reducerBFunction;
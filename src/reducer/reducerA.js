const initialState = {
    Xvalue: 0,
    Yvalue: 0
}

const reducerAFunction = (state = initialState, action) => {
    const newState = { ...state }
    if (action.type == "reducerAIncrease") {
        newState.Xvalue += parseInt(action.data)
    }
    else if (action.type == "reducerBIncrease") {
        newState.Yvalue += parseInt(action.data)
    }
    else if (action.type == "reducerADecrease") {
        newState.Xvalue -= action.data
    }
    else if (action.type == "reducerBDecrease") {
        newState.Yvalue -= action.data
    }
    return newState;
}

export default reducerAFunction;
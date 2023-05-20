import { createContext, useContext, useReducer } from 'react';

const initialState = {
    showPreloader: false,
    login: false,
};
const AppStateContext = createContext(initialState);

export const StateActionTypes = {
    SET_SHOW_PRELOADER: "SET_SHOW_PRELOADER",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case StateActionTypes.SET_SHOW_PRELOADER:
            return {
                ...state, showPreloader: action.showPreloader
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const AppStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

export const useAppState = () => useContext(AppStateContext);
import { useAppState, StateActionTypes } from "./AppState";

export const useAppStateAPI = () => {
    const { state, dispatch } = useAppState();

    return {
        showPreloader: state.showPreloader,
        setShowPreloader: (showPreloader) => dispatch({ type: StateActionTypes.SET_SHOW_PRELOADER, showPreloader: showPreloader }),

        login: state.login,
        setlogin: (login) => dispatch({ type: StateActionTypes.SET_LOGIN, login: login }),
    }
}


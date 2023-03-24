import { InferActionsTypes, ThunkType } from '../store'




//TYPES
type AppStateType = typeof initialState
type InitialActionType = InferActionsTypes<typeof initialActions>
type AuthThunkType = ThunkType<InitialActionType>
// | InProgressType>

// STATE
let initialState = {
    initialized: true as boolean,
}


//ACTION CREATORS
const initialActions = {
    initializedSuccess: () => ({ type: 'SP/APP/INITIALIZED_SUCCES' } as const)
}



//THUNKS
// export const initialize = (): AuthThunkType => async (dispatch) => {
//     dispatch(inProgress(true, PreloaderCodesEnum.Global))//inProgress-status
//     await dispatch(getAuth())
//     dispatch(initialActions.initializedSuccess())
   
    
//     dispatch(inProgress(false, PreloaderCodesEnum.Global))//inProgress-status


// }


//REDUCER
const appReducer = (state: AppStateType = initialState, action: InitialActionType): AppStateType => {

    switch (action.type) {
        // case 'SP/APP/INITIALIZED_SUCCES': return { ...state, initialized: true }
        default: return state
    }

}



export default appReducer
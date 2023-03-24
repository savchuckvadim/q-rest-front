import { stopSubmit } from "redux-form"
import { ResultCodesEnum } from "../../../services/api-laravel"
import { authAPI } from "../../../services/auth-api";

import { socket } from "../../../services/websocket/socket";
import { PreloaderCodesEnum, UserType } from "../../../types/types"
import { InferActionsTypes, ThunkType } from "../../store"


//TYPES
type AuthStateType = typeof initialState
// type AuthThunkType = ThunkType<SetAuthUserDataType | ReturnType<typeof stopSubmit> | ReturnType<typeof inProgress>>
type SetAuthUserDataType = InferActionsTypes<typeof actions>

//STATE
let initialState = {
    isAuth: false as boolean,
    authUser: null as UserType | null

}



//ACION CREATORS
const actions = {
    setAuthUserData: (authUser: UserType | null, isAuth: boolean = false) =>
        ({ type: 'SP/AUTH/SET_USER_DATA', authUser, isAuth } as const)
}


//THUNKS
// export const getAuth = (): AuthThunkType => async (dispatch) => {
  
   
// }
// export const login = (email: string, password: string): AuthThunkType => async (dispatch) => {
   

// }
// export const logout = (): AuthThunkType => async (dispatch) => {}
    

// export const setNewUser = ( //registration
//     name: string, surname: string, email: string,
//     password: string, password_confirmation: string) => async (dispatch: any) => {

//         // dispatch(inProgress(true, PreloaderCodesEnum.Global))


//         // try {
//         //     let res = await authAPI.register(name, surname, email, password, password_confirmation)
//         //     if (res.statusText === 'Created') {
//         //         // dispatch(registrationSuccess())
//         //         dispatch(getAuth())           //from auth reducer

//         //     } else {

//         //         if (res.data.error) {
//         //             alert(res.data.error)

//         //         }
//         //     }
//         //     // dispatch(inProgress(false, PreloaderCodesEnum.Global))
//         // } catch (error) {

//         //     dispatch(inProgress(false, PreloaderCodesEnum.Global))  //from preloader-reducer
//         // }


//     }

//REDUCER
const authReducer = (state: AuthStateType = initialState, action: SetAuthUserDataType): AuthStateType => {
    let result = state

    switch (action.type) {
        // case "SP/AUTH/SET_USER_DATA":
        //     result = { ...state, }
        //     result.isAuth = action.isAuth
        //     result.authUser = action.authUser //запоминаем аутентифицированного пользователя в state
        //     return result


        default:
            return result
    }

}
export default authReducer
import { Action, applyMiddleware, combineReducers, createStore } from "redux"
import { ThunkAction } from '@reduxjs/toolkit'
import ThunkMiddleware from 'redux-thunk'

import authReducer from "./reducers/auth/auth-reducer"
// @ts-ignore
import { reducer as formReducer } from 'redux-form'
import LoginRegistrationReducer from "./reducers/login-registaration/login-registration-reducer"
import appReducer from "./reducers/app-reducer"



let rootReducer = combineReducers({
  app: appReducer,
  // as () => AppStateType,
  auth: authReducer,
  //  as () => AuthStateType,
  loginRegistration: LoginRegistrationReducer,
  //  as () => LoginRegistrationType,


  form: formReducer
})

export type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any) => any }> = ReturnType<PropertiesTypes<T>>
export type ThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>
//@ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

// const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(

//   applyMiddleware(ThunkMiddleware)
// ))

let store = createStore(rootReducer, applyMiddleware(ThunkMiddleware))
export default store
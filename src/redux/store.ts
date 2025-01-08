
"use client"

import AutomationReducer from '@/src/redux/slices/automation'
import { combineReducers, configureStore} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { serialize } from 'v8'


const rootReducer = combineReducers({
    AutomationReducer,
})

export const store =configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false
        }),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
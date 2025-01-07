
"use client"

import AutomationReducer from '@/src/redux/slices/automation'
import { combineReducers, configureStore} from "@reduxjs/toolkit"
import { serialize } from 'v8'


const rootReducer = combineReducers({
    AutomationReducer,
})

export const store =configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddieware({
            serializeCheck: false
        }),
})
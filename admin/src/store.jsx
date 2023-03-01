import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./redux/slices/authSlice";
import registerationReducer from './components/users/usersadds/registerationSlice';
import messageReducer from "./redux/slices/messageSlice";

const reducer = {
  auth: authReducer,
  registeration: registerationReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
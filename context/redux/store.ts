import { configureStore } from '@reduxjs/toolkit' 
import gameDetails from '../state/gameDetails';
import userInfo from '../state/currentUser';
import gameInput from '../state/gameInput';

const store = configureStore({
        reducer: {
            userinfo: userInfo,
            gamedetails: gameDetails, 
            gameinput: gameInput,
        }, 
    });

export type AppState = ReturnType<typeof store.getState>;

export default store;

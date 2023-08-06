import { configureStore } from '@reduxjs/toolkit'
import pageInfo from '../state/pageInfo'; 
import gameDetails from '../state/gameDetails';
import userInfo from '../state/currentUser';

const store = configureStore({
        reducer: {
            // pageinfo: pageInfo,
            userinfo: userInfo,
            gamedetails: gameDetails, 
        }, 
    });

export type AppState = ReturnType<typeof store.getState>;

export default store;

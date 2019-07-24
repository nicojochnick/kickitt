/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import Feed from './src/views/feed.js'
import Add from './src/views/add'
import Explore from './src/views/explore.js'
import Notifications from './src/views/notifications.js'
import Profile from './src/views/profile.js'
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { createStore } from 'redux'
import rootReducer from './src/reducers'
import {Provider} from "react-redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {saveState} from './src/localStorage'
import { PersistGate } from 'redux-persist/integration/react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FirstLevel from './src/navigation/firstLevel';
import firebase from 'react-native-firebase'




const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persists = persistStore(store);

//Uncomment to reset state
//(async () => { await persists.purge(); })();

store.subscribe(() => {
  saveState({
    goals: store.getState()
  });
});


export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persists}>
            <FirstLevel/>
          </PersistGate>
        </Provider>
    );}
  }








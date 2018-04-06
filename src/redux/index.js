import { createStore, combineReducers, compose } from 'redux'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyCc-PR2RHM1P6iXgUWKvBzcJqPuYRYV1QE",
authDomain: "fir-react-2c15c.firebaseapp.com",
databaseURL: "https://fir-react-2c15c.firebaseio.com",
projectId: "fir-react-2c15c",
storageBucket: "",
messagingSenderId: "346772846541"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
}

// initialize firebase instance
firebase.initializeApp(firebaseConfig)

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  // firestore: firestoreReducer // <- needed if using firestore
})

const initialState = {}
export default createStoreWithFirebase(rootReducer, initialState)
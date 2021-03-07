import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useCollectionData} from 'react-firebase-hooks/firestore';
import {useAuthState} from 'react-firebase-hooks/auth';

firebase.initializeApp ({
  // your config
  // First we'll create a firebase project at the firebase website
})

const firestore = firebase.firestore();
const auth = firebase.auth();

const App = () => {
  return(
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  )
}

export default App;
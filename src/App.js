import React from 'react';
import logo from './logo.svg';
import {askForPermissioToReceiveNotifications} from './push-notification'
import './App.css';

function App() {
  return (
    <div>
   <button onClick={askForPermissioToReceiveNotifications} >
    Click to view popup
  </button>
    </div>
  );
}

export default App;

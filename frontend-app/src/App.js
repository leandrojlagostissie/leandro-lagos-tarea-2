import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from '../src/redux-store/users';

import UserList from './components/user/user.list.component';

function App() {
  return (

    <Provider store={store}>
      <div className="container">
          <div className="row">
            <UserList />
          </div>
      </div>
    </Provider>



  );
}

export default App;

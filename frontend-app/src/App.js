import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from '../src/redux-store';
import UserList from './components/user/user.list.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

    <>

    <ToastContainer />    
    <Provider store={store}>
      <div className="container">
          <div className="row">
            <UserList />
          </div>
      </div>
    </Provider>
    </>

  );
}

export default App;

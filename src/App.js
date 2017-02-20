import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
          apiKey: 'AIzaSyCa-6rcaVLN69r54dypPvPSQ6GU7uULlXQ',
          authDomain: 'manager-df6c0.firebaseapp.com',
          databaseURL: 'https://manager-df6c0.firebaseio.com',
          storageBucket: 'manager-df6c0.appspot.com',
          messagingSenderId: '948495496220'
      };

      firebase.initializeApp(config);

    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;

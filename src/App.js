import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyCPuycMblNXYckbcwTOd92-scbcdLwKD9A',
      authDomain: 'manager-35847.firebaseapp.com',
      databaseURL: 'https://manager-35847.firebaseio.com',
      projectId: 'manager-35847',
      storageBucket: 'manager-35847.appspot.com',
      messagingSenderId: '400615674867',
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text> Hey</Text>
        </View>
      </Provider>
    );
  }
}

export default App;

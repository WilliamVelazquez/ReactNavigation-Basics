import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import Login from './src/screens/login';
import About from './src/screens/about';
import Profile from './src/screens/profile';


//const AppNavigator = createStackNavigator(rutas, config);
// const AppNavigator = createStackNavigator({
//   Home,//Home: Home,
//   About,//About: About,
//   Profile,//Profile: Profile,
//   Login//Login: Login,
// });
const AppNavigator = createStackNavigator(
  {
    Home:{
      screen: Home,
      path: 'home/',
      navigationOptions:{
        title: 'Esta es la Home'
      }
    },
    About,
    Profile,
    Login
  },
  {
    initialRouteName: 'Login',
    navigationOptions:{
      title: 'Un título genérico'
    },
    initialRouteKey: 'login',
    initialRouteParams: {
      nombre: 'William Velázquez'
    }
  }
);

export default AppNavigator;
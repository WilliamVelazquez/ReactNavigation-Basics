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
    initialRouteName: 'Home',
    navigationOptions:{
      title: 'Un título genérico',
      headerTitleAllowFontScaling: true,
      headerBackTitle: 'Atras',
      gesturesEnabled: true,
      //headerBackImage: <Text>{`<=`}</Text>
      //header: <Text>Esto es un header</Text>
    },
    initialRouteKey: 'home',
    initialRouteParams: {
      nombre: 'William Velázquez'
    },
    //headerMode: float screen none
    //headerMode: 'screen',
    // mode: modal card //en android siempre será modal
    mode: 'card',
    cardStyle: {
      borderWidth: 2,
      backgroundColor: 'red'
    },
    // headerTransitionPreset: 'fade-in-place' 'uikit'
    headerTransitionPreset: 'uikit'
  }
);

const Main = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    Login: {
      screen: Login
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

export default Main;
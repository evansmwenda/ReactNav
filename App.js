/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import DetailsScreen from './src/DetailsScreen.js';
import HomeScreen from './src/HomeScreen.js';


const RootStack = createStackNavigator(
{
  Home: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    drawerIcon: () => (
      <Image
        source={require('./icons/menu.png')}
        style={[styles.icon, { tintColor: "#ffffff" }]}
      />
    ),
  }
}
);




const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  icon:{
    height:24,
    width:24,
  },
})
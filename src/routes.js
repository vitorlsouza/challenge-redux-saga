import { createAppContainer, createStackNavigator } from 'react-navigation';
import React from 'react';

import Home from './pages/home';
import List from './pages/list';
import Detail from './pages/detail';

import HeaderRight from './components/HeaderRight';
import HeadeCenter from './components/HeaderCenter';

const AppNavigator = createStackNavigator(
  {
    Home,
    List,
    Detail,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        height: 60,
        backgroundColor: '#ffe207',
        borderBottomWidth: 0,
        marginHorizontal: 20,
      },
      headerRight: <HeaderRight navigation={navigation} />,
      headerTitle: <HeadeCenter />,
    }),
  },
);

const Routes = createAppContainer(AppNavigator);

export default Routes;

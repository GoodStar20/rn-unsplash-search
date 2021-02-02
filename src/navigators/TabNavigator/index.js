import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

import FeedScreen from '../../screens/FeedScreen';
import FavoriteScreen from '../../screens/FavoriteScreen';
import { Routes } from '../routes';
import styles from './styles';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName={Routes.Images}
    tabBarOptions={{
      tabStyle: styles.tabStyle,
      activeTintColor: 'darkblue',
      showLabel: true,
      style: styles.container
    }}>
    <Tab.Screen
      name={Routes.Images}
      component={FeedScreen}
      options={() => ({
        tabBarLabel: () => <Text style={styles.labelStyle}>Search</Text>,
        tabBarIcon: ({ color }) => (
          <MaterialIcons
            name="image-search"
            style={[styles.tabIcon, { color: color }]}
          />
        )
      })}
    />
    <Tab.Screen
      name={Routes.Favorite}
      component={FavoriteScreen}
      options={() => ({
        tabBarLabel: () => <Text style={styles.labelStyle}>Pinned</Text>,
        tabBarIcon: ({ color }) => (
          <AntDesignIcons
            name="pushpin"
            style={[styles.tabIcon, { color: color }]}
          />
        )
      })}
    />
  </Tab.Navigator>
);

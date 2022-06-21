/* eslint-disable */

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import ChatsScreen from './screens/ChatsScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import HomeScreen from './screens/HomeScreen';
import MyJobsScreen from './screens/MyJobsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({}) => (
                <Icon
                  name="home-outline"
                  size={24}
                  // color={focused ? '' : 'black'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarIcon: () => <Icon name="compass-outline" size={24} />,
            }}
          />
          <Tab.Screen
            name="Chats"
            component={ChatsScreen}
            options={{
              tabBarIcon: () => <Icon name="chatbubbles-outline" size={24} />,
            }}
          />
          <Tab.Screen
            name="My Jobs"
            component={MyJobsScreen}
            options={{
              tabBarIcon: () => <Icon name="clipboard-outline" size={24} />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: () => <Icon name="person-outline" size={24} />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;

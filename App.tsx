/* eslint-disable */

import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  Icon,
  IconButton,
  NativeBaseProvider,
  StatusBar,
  Text,
  theme,
} from 'native-base';
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
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerRight: () => (
              <IconButton
                onPress={() => {}}
                size={'lg'}
                _icon={{
                  as: Ionicons,
                  name: 'notifications',
                  color: 'white',
                }}
                mr={2}
              />
            ),
            headerTitle: route.name.toUpperCase(),
            headerStyle: {
              backgroundColor: theme.colors.blue[900],
              borderBottomColor: theme.colors.pink[500],
              borderBottomWidth: 2,
            },
            headerTintColor: theme.colors.white,
            tabBarStyle: {
              paddingTop: 8,
              borderTopWidth: 0.5,
            },
            tabBarActiveTintColor: theme.colors.pink[500],
            tabBarInactiveTintColor: 'black',
          })}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  as={Ionicons}
                  name="home-outline"
                  size={'lg'}
                  color={focused ? 'pink.500' : 'black'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  as={Ionicons}
                  name="compass-outline"
                  size={'lg'}
                  color={focused ? 'pink.500' : 'black'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Chats"
            component={ChatsScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  as={Ionicons}
                  name="chatbubbles-outline"
                  size={'lg'}
                  color={focused ? 'pink.500' : 'black'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="My Jobs"
            component={MyJobsScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  as={Ionicons}
                  name="clipboard-outline"
                  size={'lg'}
                  color={focused ? 'pink.500' : 'black'}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Icon
                  as={Ionicons}
                  name="person-outline"
                  size={'lg'}
                  color={focused ? 'pink.500' : 'black'}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;

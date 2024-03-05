import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Profile from './src/pages/Profile';
import Brands from './src/pages/Brands';
import Category from './src/pages/Category';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();
export default function App() {



  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen options={{ headerShown: false }} name="Category" component={Category} />
          <Stack.Screen options={{ headerShown: false }} name="Brands" component={Brands} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}



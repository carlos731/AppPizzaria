import { StyleSheet, Text, View, StatusBar } from 'react-native';

import SignIn from './src/pages/SignIn';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import { AuthProvider } from './src/contexts/AuthContext';

import Toast from 'react-native-toast-message';

import Dashboard from './src/pages/Dashboard';
import Order from './src/pages/Order';

export default function App({ }) {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#FF3F4B" barStyle="light-content" translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

/*
  --fundo: #1e1d2e
  --green-900: #3fffa3;
  --red-900: #FF3F4B;
*/

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default AuthRoutes;
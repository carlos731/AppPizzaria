import React, { useContext } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';

import { AuthContext } from '../contexts/AuthContext';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';
import FinishOrder from '../pages/FinishOrder';

import CustomDrawer from '../components/CustomDrawer';


export type StackParamsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
  FinishOrder: {
    number: number | string;
    order_id: string;
  }
};

const Stack = createNativeStackNavigator<StackParamsList>();
const drawer = createDrawerNavigator();

const CustomDrawerMud = props => {
  const { signOut } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  function navigateDashboard() {
    navigation.navigate('Dashboard');
  }

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-between',
            alignItems: 'center',
            padding: 20,
            backgroundColor: '#1d1d2e',
            marginBottom: 20,
            borderBottomWidth: 0.6,
            borderBottomColor: '#FFF',
          }}
        >
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 20 }}
          />
          <View>
            <Text style={{ color: '#FFF' }}>{user.name}</Text>
            <Text style={{ color: '#FFF' }}>{user.email}</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={navigateDashboard} style={{ backgroundColor: 'red', width: '93%', borderRadius: 4, height: 45, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center' }}>
            <Feather
              name="home"
              size={20}
              color="#FFF"
              style={{ marginLeft: 10 }}
            />
            <Text style={{ marginLeft: 15, color: "#FFF", fontWeight: 'bold' }}>Dashboard</Text>
          </TouchableOpacity>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          left: 0,
          bottom: 50,
          backgroundColor: '#FF3F4B',
          padding: 15,
          marginLeft: 10,
          marginRight: 10,
          borderRadius: 6,
          height: 50,
        }}
        onPress={signOut}
      >
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

function DrawerRoutes() {

  const navigation = useNavigation();

  const { signOut } = useContext(AuthContext);

  return (
    <drawer.Navigator
      backBehavior="history"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#1e1d2e',
          // width: 200,
        },
        drawerLabelStyle: {
          fontWeight: 'bold',
          color: '#FFF',
        },
        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#00b94a',
        drawerInactiveBackgroundColor: '#1e1d2e',
        drawerItemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          // drawerIcon: () => (
          //   <Feather name="home" size={18} color="#FFF" />
          // )
        }}
      />
      {/* <Stack.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
          // drawerLabel: () => null,
          // drawerIcon: () => (
          //   <Feather name="clipboard" size={18} color="#FFF" />
          // )
        }}
      /> */}
      {/* <Stack.Screen
        name="FinishOrder"
        component={FinishOrder}
        options={{
          title: 'Finalizando',
          headerStyle: {
            backgroundColor: '#1d1d2e',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFF',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
            >
              <Feather
                name="log-in"
                size={24}
                color="#FFF"
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15, marginRight: 10 }}
              onPress={() => navigation.goBack()}
            >
              <Feather
                name="arrow-left"
                size={24}
                color="#FFF"
              />
            </TouchableOpacity>
          ),
        }}
      /> */}
    </drawer.Navigator>
  );
}

export default DrawerRoutes;
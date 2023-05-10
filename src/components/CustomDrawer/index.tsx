import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthContext } from '../../contexts/AuthContext';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

export type StackParamsList = {
  Dashboard: undefined;
  Order: {
    number: number | string;
    order_id: string;
  };
};


const CustomDrawer = (props) => {
  const { signOut } = useContext(AuthContext);
  const { user } = useContext(AuthContext);

  const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

  function navigateDashboard() {
    navigation.navigate('Dashboard');
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.perfil}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={styles.imgPerfil}
          />
          <View>
            <Text style={{ color: '#FFF' }}>{user.name}</Text>
            <Text style={{ color: '#FFF' }}>{user.email}</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={navigateDashboard} style={styles.button}>
            <Feather
              name="home"
              size={20}
              color="#FFF"
              style={{ marginLeft: 10 }}
            />
            <Text style={styles.buttonText}>Dashboard</Text>
          </TouchableOpacity>
        </View>
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logout}
        onPress={signOut}
      >
        <Feather
          name="log-out"
          size={20}
          color="#FFF"
          style={{ marginLeft: 10 }}
        />
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  perfil: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1d1d2e',
    marginBottom: 20,
    borderBottomWidth: 0.6,
    borderBottomColor: '#FFF',
  },
  imgPerfil: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20
  },
  button: {
    backgroundColor: "#3fffa3",
    width: '93%',
    borderRadius: 4,
    height: 50,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    marginLeft: 20,
    color: "#FFF",
    fontWeight: 'bold',
  },
  logout: {
    flexDirection: 'row',
    position: 'absolute',
    fontWeight: 'bold',
    right: 0,
    left: 0,
    bottom: 50,
    backgroundColor: '#FF3F4B',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 6,
    height: 50,
  }
});
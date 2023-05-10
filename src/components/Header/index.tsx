import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/AuthContext';

import { Feather } from '@expo/vector-icons';

function Header() {
    const navigation = useNavigation();


    const { signOut } = useContext(AuthContext);

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <View style={styles.logo}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Feather
                            name="menu"
                            size={24}
                            color="#FFF"
                        />
                    </TouchableOpacity>

                    <Image
                        source={require('../../assets/logo.png')}
                        style={{ width: 120, height: 40, marginLeft: 10 }}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.botoes}>
                    {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1624243225303-261cc3cd2fbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                            }}
                            style={{ width: 35, height: 35, borderRadius: 30, marginRight: 20 }}
                        />
                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.icon} /*onPress={() => navigation.openDrawer()}*/>
                        <Feather name="search" size={24} color="#FFF" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.icon} /*onPress={() => navigation.openDrawer()}*/>
                        <Feather name="more-vertical" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1e1d2e',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: '#FFF',
        height: 60,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    botoes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon:{
        marginRight: 8,
    }
})
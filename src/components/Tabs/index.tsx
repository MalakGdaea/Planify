import React from 'react';
import Home from '../../screens/app/Home';
import Tasks from '../../screens/app/Tasks';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import { Image } from 'react-native';

const Tabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={styles.icon} source={focused ? require('../../assets/icons/active-home.png') : require('../../assets/icons/home.png')} />
                ),
            }} />
            <Tab.Screen name="Tasks" component={Tasks} options={{
                tabBarIcon: ({ focused }) => (
                    <Image style={styles.icon} source={focused ? require('../../assets/icons/active-calendar.png') : require('../../assets/icons/calendar.png')} />
                ),
            }} />
        </Tab.Navigator>
    );
};

export default React.memo(Tabs);



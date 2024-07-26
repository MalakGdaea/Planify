import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import RootDrawerParamList from '../../types/RootDrawerParamList.ts';

const Header: React.FC<{ title: string }> = ({ title }) => {
    const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
    const openDrawer = () => {
        navigation.openDrawer();
    };

    return (
        <View style={styles.container}>
            <Pressable hitSlop={8} onPress={openDrawer}>
                <Image style={styles.icon} source={require('../../assets/icons/menu.png')} />
            </Pressable>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.icon}></View>
        </View>
    )
};

export default React.memo(Header);

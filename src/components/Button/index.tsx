import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import buttonType from '../../constants/buttons';


interface ButtonProps {
    onPress?: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
    type?: keyof typeof buttonType;
    style?: StyleProp<ViewStyle>;
}

const Button = ({ children, onPress, type, style }: ButtonProps) => {
    const buttonStyle = styles[type || 'primary'];
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle, style]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);

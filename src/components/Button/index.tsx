import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import styles from './styles';
import buttonType from '../../constants/buttons';


interface ButtonProps {
    onPress?: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
    type?: keyof typeof buttonType;
}

const Button = ({ children, onPress, type }: ButtonProps) => {
    const buttonStyle = styles[type || 'primary'];
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);

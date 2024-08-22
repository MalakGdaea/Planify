import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';
import getStyles from './styles';
import ButtonType from '../../enums/buttonType';


interface ButtonProps {
    onPress?: (event: GestureResponderEvent) => void;
    children: React.ReactNode;
    type?: ButtonType;
    style?: StyleProp<ViewStyle>;
}

const Button = ({ children, onPress, type = ButtonType.Primary, style }: ButtonProps) => {
    const styles = getStyles(type);
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};

export default React.memo(Button);

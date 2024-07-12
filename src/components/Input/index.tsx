import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styles from './styles';
import colors from '../../constants/colors';
import { KeyboardTypeOptions } from 'react-native';


interface InputProps {
    placeholder?: string,
    secureTextEntry?: boolean;
    keyboardType?: KeyboardTypeOptions;
    onChangeText?: ((text: string) => void) | undefined;
}


const Input = ({ placeholder, keyboardType, onChangeText, ...props }: InputProps) => {
    return (
        <TextInput onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={colors.midGray} style={styles.input} keyboardType={keyboardType ?? 'default'} {...props} />
    );
};

export default React.memo(Input);

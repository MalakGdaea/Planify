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
    outlined: boolean,
}


const Input = ({ placeholder, keyboardType, outlined, onChangeText, ...props }: InputProps) => {
    return (
        <TextInput onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={colors.midGray}
            style={[styles.input, outlined ? styles.outlined : {}]}
            keyboardType={keyboardType ?? 'default'} {...props} />
    );
};

export default React.memo(Input);

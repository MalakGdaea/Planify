import React from 'react';
import { View, Pressable, GestureResponderEvent } from 'react-native';
import styles from './styles';

interface CheckboxProps {
    checked: boolean,
    onPress: (event: GestureResponderEvent) => void;
}

const Checkbox = ({ checked, onPress }: CheckboxProps) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, checked ? styles.checkedBox : {}]}>
            {checked ? <View style={styles.innerSquare} /> : null}
        </Pressable>
    );
};

export default React.memo(Checkbox);

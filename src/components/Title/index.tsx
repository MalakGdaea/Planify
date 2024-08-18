import React from 'react';
import { Text } from 'react-native';
import styles from './styles';


interface TextProps {
    children: React.ReactNode;
    type?: string
}

const Title = ({ children, type }: TextProps) => {
    return (
        <Text style={[styles.title, type === 'thin' ? styles.thin : {}]}>{children}</Text>
    );
};

export default React.memo(Title);

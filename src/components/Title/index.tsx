import React from 'react';
import { Text } from 'react-native';
import styles from './styles';


interface TextProps {
    children: React.ReactNode;
}

const Title = ({ children }: TextProps) => {
    return (
        <Text style={styles.title}>{children}</Text>
    );
};

export default React.memo(Title);

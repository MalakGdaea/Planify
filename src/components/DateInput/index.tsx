import React, { useState } from 'react';
import styles from './styles';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { MONTH_DAY_YEAR } from '../../constants/dateFormat';

interface InputProps {
    value: Date;
    outlined?: boolean;
    onChange: React.Dispatch<React.SetStateAction<Date>>;
}

const DateInput = ({ value, onChange }: InputProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const onDateOpen = () => {
        setOpen(true);
    };

    return (
        <View>
            <TouchableOpacity style={styles.outlined} onPress={onDateOpen}>
                <Image style={styles.icon} source={require('../../assets/icons/schedule.png')} />
                <Text style={styles.text}>{moment(value).format(MONTH_DAY_YEAR) || 'Due Date ...'}</Text>
            </TouchableOpacity>
            <DatePicker
                modal
                mode='date'
                open={open}
                date={value}
                onConfirm={(date) => {
                    setOpen(false);
                    onChange(date);
                }}
                onCancel={() => {
                    setOpen(false);
                }}
            />
        </View>
    );
};

export default React.memo(DateInput);

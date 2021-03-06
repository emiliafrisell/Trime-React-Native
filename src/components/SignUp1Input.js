import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function SignUp1Input ( { label } ) {
    const [value, onChangeText] = React.useState('');
    
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 16,
        flex: 1,
        padding: 20,
    },
    label: {
        color: '#fff',
        fontSize: 13,
        padding: 4,
    },
    input: { 
        height: 44, 
        width: 353, 
        backgroundColor: '#fff', 
        borderRadius: 8, 
        padding: 7 
    }
})
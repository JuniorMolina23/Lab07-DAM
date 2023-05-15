import React from 'react';
import { View, StyleSheet, TouchableOpacity, Button, Text } from 'react-native';

const DualButton = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => props.navigation.navigate('UsersList')}>
                <Text style={styles.texto}>Ver Usuarios</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => props.navigation.navigate('CreateUserScreen')}>
                <Text style={styles.texto}>Crear un Nuevo Usuario</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    boton: {
        backgroundColor: 'blue',
        width: 200,
        height: 40,
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignItems:'center'
    },
    texto:{
      color:'white'
    }
});

export default DualButton;

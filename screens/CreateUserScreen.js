import React, {cloneElement, useState} from 'react'
import { View, Text, ScrollView, TextInput, Button, StyleSheet } from 'react-native'
import { database } from '../database/firebase'
import {collection, addDoc} from 'firebase/firestore'

const CreateUserScreen = () => {

  const [state ,setState] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const Limpiar = () => {
    setState({
      name: '',
      email: '',
      phone: ''
    });
  }
  const handleChangeText = (name, value) => {
    setState({...state, [name]:value})
  }

  const saveNewUser = async () => {
    if (state.name === ''){
      alert('Por favor ingresa un nombre')
    } else {
      await addDoc(collection(database, 'usuarios'), state);
      alert('Se agrego correctamente al usuario')
      Limpiar()
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.inputGroup}>
        <TextInput placeholder='Name User'
        onChangeText={(value) => handleChangeText('name',value)}
        value={state.name}/>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Email User'
        onChangeText={(value) => handleChangeText('email',value)}
        value={state.email}/>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Phone User'
        onChangeText={(value) => handleChangeText('phone',value)}
        value={state.phone}/>
      </View>
      <View>
        <Button title='Save User' onPress={() => saveNewUser()}/>
      </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding:35,
  },
  inputGroup:{
    flex:1,
    padding:0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  }
})

export default CreateUserScreen

import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView,TouchableOpacity, StyleSheet } from 'react-native'
import { database } from '../database/firebase'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Usuarios from './Usuarios'

const UsersList = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    const collectionRef = collection(database, 'usuarios')
    const q = query(collectionRef, orderBy('name', 'desc'))

    const unsuscribe = onSnapshot(q, querySnapshot => {
      setUser(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone
        })
        )
      )
    })
    return unsuscribe
  }, [])
  return (
    <ScrollView>
      <View>
        <Text></Text>
        {users.map(usuario => <Usuarios key={usuario.id} {...usuario} />)}
      </View>
    </ScrollView>
)}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#4285f4',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
  },
});
export default UsersList

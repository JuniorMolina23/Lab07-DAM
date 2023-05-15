import * as React from 'react'
import * as RN from 'react-native'
import { database } from '../database/firebase'
import { doc } from 'firebase/firestore'

export default function Usuarios({
    id,
    email,
    name,
    phone
}) {
    return (
        <RN.View style={styles.container}>
            <RN.Text style={styles.email}>{email}</RN.Text>
            <RN.Text style={styles.name}>{name}</RN.Text>
            <RN.Text style={styles.phone}>{phone}</RN.Text>
        </RN.View>
    )
}
const styles = RN.StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 20,
      marginBottom: 10,
      borderRadius: 10,
      elevation: 4,
    },
    email: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    name: {
      fontSize: 16,
      marginBottom: 5,
    },
    phone: {
      fontSize: 16,
    },
  });
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Certified = () => {
  return (
    <View style={styles.overlay}>
        <Text style={styles.title}>Get Certified From{"\n"} India's Biggest{"\n"} Beauty Platform</Text>
        <Image
                    source={require('../assets/images/certificate.png')} 
                    style={styles.certificate} 
                />
    </View>
  )
}

export default Certified

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: '#000',
        flex: 1,
        width: '100%',
        padding: 20,
        alignItems:'center',
        gap:20
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    certificate:{
        width: 350,
        height: 270,
        marginBottom:20
    }
})
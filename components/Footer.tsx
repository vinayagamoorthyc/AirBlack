import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Footer = () => {
  return (
    <ImageBackground
    source={{uri: 'https://c7.alamy.com/comp/2RXHBX6/collage-with-beautiful-indian-women-on-color-background-2RXHBX6.jpg'}}
    style={styles.imageBackground}
    >
        <View style={styles.overlay}>
                <Text style={styles.title}>Join our growing{"\n"} community of{"\n"} 35,000+ alumni</Text>
                <View style={styles.buttonContainer}>
                    <Button title="Apply Now" color="#fff"/>
                </View>
        </View>
    </ImageBackground>
  )
}

export default Footer

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        width: '100%',
        padding: 20,
        alignItems:'center',
        gap:40,
      },
      title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      buttonContainer: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 3,
        borderColor:'#fff',
        width:'95%',
        marginBottom:20
      },
})
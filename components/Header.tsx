import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <ImageBackground
    source={{uri: 'https://c7.alamy.com/comp/2RXHBX6/collage-with-beautiful-indian-women-on-color-background-2RXHBX6.jpg'}}
    style={styles.imageBackground}
    >
        <View style={styles.overlay}>
            <View style={styles.contentContainer}>
                <Image 
                    source={require('../assets/images/logo.png')} 
                    style={styles.logo} 
                    resizeMode="contain"
                />
                <Text style={styles.presents}>PRESENTS</Text>
            </View>
        </View>

    </ImageBackground>
  )
}

export default Header

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
      },
      contentContainer: {
        alignItems: 'center',
        marginBottom: 20,
      },
      logo: {
        width: 120,
        height: 90, 
      },
      presents: {
        color: '#fff',
        fontSize: 14,
        fontFamily:'YesevaOne-Regular'
      },
})
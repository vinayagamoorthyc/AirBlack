import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

const Apply = () => {
  return (
      <ImageBackground
    source={{uri: 'https://c7.alamy.com/comp/2RXHBX6/collage-with-beautiful-indian-women-on-color-background-2RXHBX6.jpg'}}
    style={styles.imageBackground}
    >
        <View style={styles.overlay}>
            <View style={styles.applyflex}>
                <Text style={styles.title}>Why Should You  Join Airblack?</Text>
                <View style={styles.applyfeatures}>
                    <View >
                        <Ionicons name="bookmark" size={13} color="white" /> 
                        <Text style={styles.featuretext}>Do-it-together,  live on zoom</Text>
                    </View>
                    <View>
                        <Ionicons name="bookmark" size={13} color="white" />
                        <Text style={styles.featuretext}>4.8 /5  Rated Classes</Text>
                    </View>
                    <View >
                        <Ionicons name="bookmark" size={13} color="white" />
                        <Text style={styles.featuretext}>35000+  Members</Text>
                    </View>
                </View>
            </View>
        </View>
    </ImageBackground>
  )
}

export default Apply

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
      applyflex:{
        alignItems:'center',
      },
      title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      applyfeatures:{

      },
      featuretext:{
        color:'#fff',
        fontSize: 20,

      },
})
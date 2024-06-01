import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import {useFonts} from 'expo-font';

const Apply = () => {
  const [fontsLoaded]=useFonts({
    'Dosis-regular':require('/Users/vinayagamoorthyc/Documents/React Native Projects/AirBlack_Assignment/Assign/assets/fonts/Dosis-Regular.ttf')
  })
  if(!fontsLoaded){
    return undefined;
  }
  return (
      <ImageBackground
    source={{uri: 'https://c7.alamy.com/comp/2RXHBX6/collage-with-beautiful-indian-women-on-color-background-2RXHBX6.jpg'}}
    style={styles.imageBackground}
    >
        <View style={styles.overlay}>
            <View style={styles.applyflex}>
                <Text style={styles.title}>Why Should You{"\n"} Join Airblack?</Text>
                <View style={styles.applyfeatures}>
                    <View style={styles.featureflex}>
                        <Ionicons name="videocam" size={27} color="white" /> 
                        <Text style={styles.featuretext}>Do-it-together,{"\n"} live on zoom</Text>
                    </View>
                    <View style={styles.featureflex}>
                        <Ionicons name="star" size={27} color="white" />
                        <Text style={styles.featuretext}>4.8 /5 {"\n"}Rated Classes</Text>
                    </View>
                    <View style={styles.featureflex}>
                        <Ionicons name="people-circle" size={27} color="white" />
                        <Text style={styles.featuretext}>35000+{"\n"} Members</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
              <Button title="Apply Now" color="#fff"/>
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
        gap:40,

      },
      title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
      },
      applyfeatures:{
        flexDirection: 'row',
        gap:25,

      },
      featuretext:{
        color:'#fff',
        fontSize: 17,
        textAlign:'center',
        fontFamily:'Dosis-Regular'
      },
      featureflex:{
        alignItems:'center',
        gap:10,
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
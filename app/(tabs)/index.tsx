import Apply from '@/components/Apply';
import Certified from '@/components/Certified';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/Header';
import { StyleSheet,ScrollView, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.whole}>
      <View style={styles.socials}>
        
        <Image 
        source={require('/Users/vinayagamoorthyc/Documents/React Native Projects/AirBlack_Assignment/Assign/assets/images/insta.png')}
        style={styles.social}
        ></Image>
        <Image 
        source={require('/Users/vinayagamoorthyc/Documents/React Native Projects/AirBlack_Assignment/Assign/assets/images/facebook.png')}
        style={styles.social}
        ></Image>
        <Image 
        source={require('/Users/vinayagamoorthyc/Documents/React Native Projects/AirBlack_Assignment/Assign/assets/images/linkedin.png')}
        style={styles.social}
        ></Image>
        <Image 
        source={require('/Users/vinayagamoorthyc/Documents/React Native Projects/AirBlack_Assignment/Assign/assets/images/twitter.png')}
        style={styles.social}
        ></Image>
      </View>
    <ScrollView style={styles.container}>
      <Header/>
      <Form/>
      <Apply/>
      <Certified/>
      <Footer/>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  whole:{
    position:'relative',
    flex:1,
  },
  container:{
    zIndex:0,
  },
  socials:{
    position:'absolute',
    right:10,
    bottom:35,
    zIndex:1,
    gap:10,
    alignItems:'center'
  },
  social:{
    width:42,
    height:40
  }
});
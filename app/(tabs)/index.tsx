import Apply from '@/components/Apply';
import Certified from '@/components/Certified';
import Form from '@/components/Form';
import Header from '@/components/Header';
import { StyleSheet,ScrollView, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header/>
      <Form/>
      <Apply/>
      <Certified/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
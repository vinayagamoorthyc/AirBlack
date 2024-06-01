import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import React from 'react'

const Form = () => {
  return (
       <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>Professional Online Makeup Course</Text>
            <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}><Ionicons name="bookmark" size={13} color="white" /> Certification Programme</Text>
              <Text style={styles.rating}><Ionicons name="star" size={13} color="#ffd700" /> Rated 4.85/5</Text>
            </View>
            <View style={styles.bullets}>
              <Text style={styles.bullet}>✓&nbsp; India's No.1 Online Makeup Course</Text>
              <Text style={styles.bullet}>✓&nbsp; Learn by LIVE Do-it-Together Classes</Text>
              <Text style={styles.bullet}>✓&nbsp; Unlimited Practise Session to master skills</Text>
            </View>
          </View>
          
          <View style={styles.form}>
            <Text style={styles.formTitle}>FILL THE FORM BELOW TO ENQUIRE</Text>
            <TextInput style={styles.input} placeholder="Enter your name" placeholderTextColor="#aaa"/>
            <TextInput style={styles.input} placeholder="Enter your WhatsApp Number" placeholderTextColor="#aaa"/>
            <TextInput style={styles.input} placeholder="Select your profession" placeholderTextColor="#aaa"/>
            <TextInput style={styles.input} placeholder="Select your goal" placeholderTextColor="#aaa"/>
            <TextInput style={styles.input} placeholder="Select your city" placeholderTextColor="#aaa"/>
            <View style={styles.buttonContainer}>
              <Button title="Submit" color="#a39193"/>
            </View>
          </View>
        </View>
  )
}

export default Form

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: '#000',
        flex: 1,
        width: '100%',
        padding: 20,
      },
      header: {
        alignItems: 'flex-start',
        marginBottom: 20,
      },
      title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 10,
      },
      subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        
      },
      subtitle: {
        color: '#fff9',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#444',
        padding:5,
      },
      rating: {
        color: '#ffd700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
      },
      bullets: {
        alignItems: 'flex-start',
        marginTop: 10,
      },
      bullet: {
        color: '#999',
        fontSize: 14.5,
        marginVertical: 2,
      },
      form: {
        backgroundColor: '#fff',
        borderRadius: 0,
        padding: 20,
        width: '100%',
        marginTop: 20,
      },
      formTitle: {
        color: '#a39193',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        color: '#000',
      },
      buttonContainer: {
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 5,
        padding: 3,
      },
})
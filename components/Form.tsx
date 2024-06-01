import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';

import React, { useState } from 'react'

const Form = () => {

  const [value0, setValue0] = useState("+91");

  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);

  const items = [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
  ];
  const items2 = [
    { label: '+91', value: '+91' },
    { label: '+92', value: '+92' },
  ];

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
            <Text>*Enter your name</Text>
            <TextInput style={styles.input} placeholder="Eg. Vinayaga Moorthy" placeholderTextColor="#aaa"/>
            <Text>*Enter your WhatsApp Number</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <Dropdown
                style={{width:50,borderWidth:1,borderRadius:5}}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={items2}
                labelField="label"
                valueField="value"
                value={value0}
                onChange={item => {
                  setValue0(item.value);
                }}
              /><TextInput style={styles.input2} placeholder="Eg. 00000 00000" placeholderTextColor="#aaa"/>
            </View>
            <Text>*Select your profession</Text>
            <Dropdown
              style={styles.input}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={items}
              labelField="label"
              valueField="value"
              placeholder="Choose the most relevent option"
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
            <Text>*Select your goal</Text>
            <Dropdown
              style={styles.input}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={items}
              labelField="label"
              valueField="value"
              placeholder="Choose the most relevent option"
              value={value2}
              onChange={item => {
                setValue2(item.value);
              }}
            />
            <Text>*Select your city</Text>
            <Dropdown
              style={styles.input}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={items}
              labelField="label"
              valueField="value"
              placeholder="Choose the most relevent option"
              value={value3}
              onChange={item => {
                setValue3(item.value);
              }}
            />
            <View style={styles.buttonContainer}>
              <Button title="Submit" color="#000"/>
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
        fontFamily:'YesevaOne-Regular'
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
        fontFamily:'Dosis-Medium'
      },
      rating: {
        color: '#ffd700',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontFamily:'Dosis-Medium'
      },
      bullets: {
        alignItems: 'flex-start',
        marginTop: 10,
      },
      bullet: {
        color: '#999',
        fontSize: 14.5,
        marginVertical: 2,
        fontFamily:'Dosis-Medium'
      },
      form: {
        backgroundColor: '#fff',
        borderRadius: 0,
        padding: 20,
        width: '100%',
        marginTop: 20,
        
      },
      formTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        fontFamily:'Dosis-Medium'
      },
      input: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        color: '#000',
        fontFamily:'Dosis-Medium',
      },
      input2:{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        color: '#000',
        fontFamily:'Dosis-Medium',
        width:'80%'
      },
      buttonContainer: {
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 5,
        padding: 3,
        fontFamily:'Dosis-Medium'
      },
      placeholderStyle: {
        fontSize: 16,
        color: '#b5b5b5',
        fontFamily:'Dosis-Medium'
      },
      selectedTextStyle: {
        fontSize: 15,
        fontFamily:'Dosis-Medium'
      },
      selectedText: {
        marginTop: 20,
        fontSize: 15,
        fontFamily:'Dosis-Medium'
      },
})
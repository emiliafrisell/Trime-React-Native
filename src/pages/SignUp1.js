import React, { useState } from 'react';
import { ScrollView } from 'react-native'

import LogoSignUp  from '../../assets/images/logo-sign-up.svg';
import SignUp1Input from '../components/SignUp1Input.js';
import CircleButton from '../components/CircleButton.js';
import Emoticons from '../components/Emoticons.js';
import Shape from '../components/Shape.js';
import BigButton from '../components/BigButton'
import BdayPicker from '../components/BdayPicker'

import { StyleSheet, Text, View, Dimensions } from 'react-native';
const { width, height} = Dimensions.get('window');

export default function SignUp1() {

  const [ selecedType, setSelectedType ] = useState('')
  const [ day, setDay ] = useState('')
  const [ month, setMonth ] = useState('')
  const [ year, setYear ] = useState('')
  
  

    console.log('sign up 1')

    return (
        <ScrollView  contentContainerStyle={styles.container}
          directionalLockEnabled={true} 
          showsHorizontalScrollIndicator={false}  
          showsVerticalScrollIndicator={false} >
      <Emoticons></Emoticons>
       <LogoSignUp style={styles.logo}/>
        <Text style={styles.title}>What are you?</Text>
        <View style={styles.circles}>
          <CircleButton buttonLabel='Trainee' selectType={selecedType}></CircleButton>
          <CircleButton buttonLabel='Trainer' selectType={selecedType}></CircleButton>
        </View>
        <View style={styles.signupContainer}>
          <SignUp1Input label='Full Name'/>
          <SignUp1Input label='E-mail address'/>
          <SignUp1Input secureTextEntry={true} label='Password'/>
           <SignUp1Input label='Gender'/>
           <BdayPicker day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} />
          {/* <View style={styles.birthDateContainer}>
            <Text style={styles.birthDateLabel}>Birth date</Text>
            <View style={styles.dateInput}>
              <TextInput style={[styles.input, styles.day]}  onChangeText={day => onChangeText(day)}
              value={value} />
              <TextInput style={[styles.input, styles.month]}
              onChangeText={month => onChangeText(month)}
              value={value} />
              <TextInput style={[styles.input, styles.year]}  onChangeText={year => onChangeText(year)}
              value={value} />
            </View>
          </View> */}
        </View>
        <BigButton 
              BGColor='#0BD8A7'  
              text='Next' 
              UColor='#05668D' 
              linkTo='/sign-up-2' 
          />
          
        <Shape style={{zIndex: -100}}></Shape>
        </ScrollView>

    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: '#082D4C',
    alignItems: 'center', //horizontal 
    width: width,
    // height: height,
  },
  logo: {
    marginTop: 76,
  },
  title: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
  circles: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
    width: '70%',
  },
  signupContainer: {
    flex: 2.8,
    flexDirection: 'column',
    marginTop: 15,
  },
   birthDateContainer: {
    flexDirection: 'column',
    marginTop: 16,
    padding: 20,
   },
   birthDateLabel: {
    color: 'white',
    padding: 4,
    fontSize: 13,
   },
   dateInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   input: {
    backgroundColor: '#fff', 
    borderRadius: 9,
    height: 44,
   },
   day: {
     width: 90,
   },
   month: {
    width: 90,
  },
  year: {
    width: 120,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center', //horizontal
    justifyContent: 'center', 
    margin: 10,
    borderRadius: 40,

    width: 260,
    height: 73,
  },
  buttonText: {
    color: "white",
  },
  signUpBtn: {
    backgroundColor: '#0BD8A7',
  },
});

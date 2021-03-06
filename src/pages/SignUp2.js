import React, {useState} from 'react';
import Slider from '@react-native-community/slider';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import BigButton from '../components/BigButton'
import Emoticons from '../components/Emoticons.js';
import LogoSignUp  from '../../assets/images/logo-sign-up.svg';
import SignUp2Input from '../components/SignUp2Input.js';
import Shape from '../components/Shape.js';
import WorkOutPlaces from '../components/WorkOutPlaces';

const { width } = Dimensions.get('window');

export default function SignUp2() {

    const [ level, setLevel ] = useState('Intermediate')

    const setTrainingLevel = (value) => {

      let currentLevel = Math.floor(value * 100);
      if (currentLevel < 30){ 
         setLevel('Beginner')

      } else if (currentLevel >=30 && currentLevel < 70) {
        setLevel('Intermediate')

      } else if (currentLevel >= 70) {
        setLevel('Pro')
      }
    }

    const saveChanges = () => {
      console.log('Level of Training(2): ' + level)
    }

    return (

      <ScrollView contentContainerStyle={styles.container}
        directionalLockEnabled={true} 
        showsHorizontalScrollIndicator={false}  
        showsVerticalScrollIndicator={false} >

          <Emoticons></Emoticons>
          <LogoSignUp style={styles.logo}/>
          <Text style={styles.subtitle}>Time to set up your profile</Text>
          
          <View style={styles.inputBlock}>
            <SignUp2Input label='Age:' />
            <SignUp2Input label='Height:' />
          </View>
          <View style={styles.inputBlock}>
            <SignUp2Input label='Gender:' />
            <SignUp2Input label='Weight:' />
          </View>

          <Text style={styles.textTitle}>Level of training:</Text>

          <Slider
            style={{width: 340, height: 40}}
            value={0.5}
            onSlidingComplete={(value) => setTrainingLevel(value)}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor='#0BD8A7'
            maximumTrackTintColor='#0BD8A7'
            thumbTintColor='#0BD8A7'
          />

          <View style={{flexDirection: 'row', width: 390, justifyContent: 'space-around'}}>
            <Text style={{color: '#fff'}}>Beginner</Text>
            <Text style={{color: '#fff', paddingRight: 25}}>Intermediate</Text>
            <Text style={{color: '#fff'}}>Pro</Text>
          </View>

          <Text style={styles.textTitle}>How do you want to work out:</Text>
          
      
          <WorkOutPlaces/>

          <BigButton onPress={saveChanges}
                BGColor='#0BD8A7'  
                text='Next' 
                UColor='#05668D' 
                linkTo='/sign-up-3' 
            />

          <Shape></Shape>
      </ScrollView>
    )
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#082D4C',
    alignItems: 'center',
    width: width 
  },
  logo: {
    marginTop: 76,
  },
  subtitle: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
  inputBlock: {
    flex: 0.3,
    flexDirection: 'row',
    width: 346
  },
  textTitle: {
    color: '#fff',  
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginTop: 50,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
  },
  button: {
    alignItems: 'center', 
    justifyContent: 'center', 

    borderRadius: 40,

    width: 260,
    height: 73,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
  },
  signUpBtn: {
    backgroundColor: '#0BD8A7',
  },
  logInBtn: {
    backgroundColor: '#05668D',
  },

});

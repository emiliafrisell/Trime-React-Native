import React, { useState, useEffect } from 'react';
import { TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, Text, View, Image } from 'react-native';

import SelectTrainingType from '../components/SelectTrainingType'
import Emoticons from '../components/Emoticons.js';
import SmallLogo from '../components/SmallLogo'
import LevelSlider from '../components/slider';
import BigButton from '../components/BigButton'
import Shape from '../components/Shape.js';

const { width } = Dimensions.get('window');

export default function SignUp3() {
    
    const [ image, setImage ] = useState('https://www.kindpng.com/picc/m/722-7221920_placeholder-profile-image-placeholder-png-transparent-png.png');
    const [ value, onChangeText ] = useState('');
    const [ selectedTypes, setSelectedTypes ] = useState([]);
    const [ level, setLevel ] = useState('Intermediate')

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      }
    
      const saveChanges = () => {
        console.log('Description: ' + value)
        console.log('Image: ' + image)
        console.log('Types of training: ' + selectedTypes)
        console.log('Level of Training: ' + level)
      }

    return (
        <ScrollView  contentContainerStyle={styles.container}
          directionalLockEnabled={true} 
          showsHorizontalScrollIndicator={false}  
          showsVerticalScrollIndicator={false} >

          <SmallLogo />
          <Emoticons></Emoticons>

          <Text style={[styles.whiteText, {fontSize: 16, marginTop: 22}]}>Time to set up your profile</Text>
          
          <TouchableOpacity onPress={selectImage} style={{marginTop: 6}} >
          <Image source={{uri: image}} style={{margin: 4, width: 100, height: 100, borderRadius: 100}} />
          </TouchableOpacity>

          <View>
            <Text  style={[styles.whiteText, {fontSize: 14, fontWeight: 'bold', marginBottom: 7}]}>Description: </Text>
            <TextInput
                style={styles.textInput}
                multiline={true}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={'Who are you?'}
                />
        </View>

        <View style={{width: 414, paddingHorizontal: 35, marginBottom: 10}}>
        <Text style={[styles.whiteText, {textAlign: "left", fontWeight: 'bold'}]}>What type of training do you do?</Text>
        </View>

        <SelectTrainingType whiteText={true} selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} styles={{flex: 1}} />

        <LevelSlider level={level} setLevel={setLevel} />
        

          <BigButton onPress={saveChanges}
              BGColor='#0BD8A7'  
              text='Next' 
              UColor='#05668D' 
              linkTo='/feed' 
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
    width: width,
  },
  whiteText: {
    color: 'white'
  },
  fontSize16: {
    fontSize: 16
  },
  textInput: { 
      height: 109,
      width: 353, 
      padding: 10,
      paddingTop: 10,
      borderColor: 'gray', 
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: 'white',
      marginBottom: 20,
  },
  btnLink: { 
    height: '100%', width: '100%', borderRadius: 40, flex: 1, alignItems: 'center', justifyContent: 'center' }
});
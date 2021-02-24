
import React, { useState } from 'react';
import { TextInput, SectionList, FlatList, ListItem } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function GeneralFeed() {

    const DATA = [
        {
          title: "Because you liked Boxing:",
          data: [
              { 
                id: 1,
                topic: "Boxing KO tips", 
                trainer: 'Anna S',
                img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage}/>
              },
              { 
                id: 2,
                topic: "Self Defense", 
                trainer: 'Johan K',
                img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
              },
              { 
                id: 3,
                topic: "Kickboxing", 
                trainer: 'Henrik M',
                img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
              },
              { 
                id: 4,
                topic: "Karate class", 
                trainer: 'Josefine R',
                img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
              },
              { 
                id: 5,
                topic: "e", 
                trainer: 'John Doe',
                img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
              },
              { 
                id: 6,
                topic: "f", 
                trainer: 'John Doe',
                img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
              }
          ]
        },
        {
          title: "Events near you:",
          data: [
            { 
              id: 1,
              topic: "Mental Health", 
              trainer: 'Karin R',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 2,
              topic: "Motivation", 
              trainer: 'Jonas G',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 3,
              topic: "Lifestyle", 
              trainer: 'Tomas T',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 4,
              topic: "Dare to travel", 
              trainer: 'Anders A',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            }
        ]
        },
        {
          title: "Gym workouts:",
          data: [
            { 
              id: 1,
              topic: "PT for beginners", 
              trainer: 'Emma K',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 2,
              topic: "Full body workout", 
              trainer: 'Jonas G',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 3,
              topic: "Gym Technique", 
              trainer: 'Elsa S',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 4,
              topic: "Full body workout", 
              trainer: 'Jonas G',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 5,
              topic: "Gym Technique", 
              trainer: 'Elsa S',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            }
        ]
        },
        {
          title: "Popular PT:s right now:",
          data: [
            { 
              id: 1,
              topic: "1", 
              trainer: 'John Doe',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 2,
              topic: "2", 
              trainer: 'John Doe',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 3,
              topic: "3", 
              trainer: 'John Doe',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 4,
              topic: "1", 
              trainer: 'John Doe',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 5,
              topic: "2", 
              trainer: 'John Doe',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            },
            { 
              id: 6,
              topic: "3", 
              trainer: 'John Doe',
              img: <Image source={{uri: 'https://picsum.photos/100',}} style={styles.itemImage} />
            }
        ]
        }
      ];


  const ListItem = ({ item }) => {
    return (
      <View key={item.id} style={styles.item}>
        {item.img}
        <Text>{item.topic}</Text>
        <Text>{item.trainer}</Text>
        
      </View>
    );
  };

    return (
      <View style={styles.container}>
    
        <SectionList
            // contentContainerStyle={{marginTop: 10}}
            stickySectionHeadersEnabled={false}
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, section }) => {
              return null; // otherwise it renders both horizontally and vertically
            }}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionContainer}>
                <Text style={styles.header}>{section.title}</Text>
                <FlatList
                  style={ styles.section }
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
        />
    
      </View>
    )
  }
 

const styles = StyleSheet.create({
  container: {
    flex: 1, // takes up the entire screen
    backgroundColor: 'white',
    alignItems: 'flex-start', //horizontal 
    width: '100%',
    marginTop: 150,
  },
  sectionContainer: {
    marginTop: 20,
    borderBottomWidth: 8,
    borderBottomColor: '#eeeeee'
  },
  section: {
    paddingVertical: 20,
  },
  item: {
    width: 100,
    marginVertical: 8,
    marginLeft: 20
  },
  itemImage: {
    width:100, 
    height: 100,
    borderRadius: 10,
    marginBottom: 4
  },
  header: {
    marginLeft: 20,
    fontSize: 16,
    backgroundColor: "#fff",
    fontWeight: 'bold'
  },
  title: {
    fontSize: 24
  }
});

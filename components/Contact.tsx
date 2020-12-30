import * as React from "react";
import { View, StyleSheet } from "react-native";

import { Contact as ContactModel } from "./Model";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Linking, Alert, Platform } from 'react-native';

interface ContactProps {
  contact: ContactModel;
  setModal: (visible: boolean) => void,
}
import { Text } from '@shoutem/ui';


export default ({ contact }: ContactProps) => {

  const sendEmail = () => {
    Linking.openURL(`mailto:${contact.email}`) 
  }
  


  const callNumber = (phone:string) => {
    console.log('callNumber ----> ', phone);
    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `${phone}`;
    }
    else {
      phoneNumber = `${phone}`;
    }
    
    const number = phoneNumber.replace(/-/g,'');

    Linking.canOpenURL(number)
      .then(supported => {
        if (!supported) {
          Alert.alert(number+' not available');
        } else {
          return Linking.openURL(number);
        }
      })
      .catch(err => console.log(err));
  };


  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.wrapper} onPress={() => { sendEmail() }}>
        <Text style={styles.name} >{contact.name}</Text>
        <Text style={styles.email}>{contact.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={() => { callNumber(contact.phone) }}>
        <View style={styles.controll}>
          <Ionicons style={styles.icon} name="md-call-outline" size={32} color="green" />
          <Text >{contact.phone}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 5,
    justifyContent: "center",
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  row: {
    marginBottom: 30,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row"
  },
  touch: {
    paddingTop: 20,
    paddingBottom: 20,

    backgroundColor: "rgba(63,191,127,0.1)",
    flex: 1,
  },
  controll: {
    display: "flex",
    alignSelf: "center",
  },
  icon: {
    alignSelf: "center",
  },
  index: {
    alignSelf: "center",
    color: "black",
  },
  artist: {
    color: "gray",
  },
  cell: {
    flex: 1,
  },
  name: {
    padding: 6,
    alignSelf: "center",
    color: "black",
  },
  email: {
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignSelf: "center",
    color: "black",
  },
});

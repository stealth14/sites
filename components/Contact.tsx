import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Contact as ContactModel } from "./Model";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface ContactProps {
  contact: ContactModel;
  name: string;
  index: number;
  setModal: (visible: boolean) => void,
}
import { Text } from '@shoutem/ui';
import { Clipboard } from 'react-native';
import { useToast } from 'react-native-fast-toast'


export default ({ contact, name, index, setModal }: ContactProps) => {
  const toast = useToast()

  const copyToClipboard = (attribute:string) => {
    const object  = {
      "name":contact.name,
      "email": contact.email,
      "phone": contact.phone,
    };

    Clipboard.setString(object[attribute]);
    if (toast != null)
      toast.show(attribute + " copied", { type: "success", duration: 600 });

  };

  return (
    <View style={styles.row}>
      <TouchableOpacity style={styles.wrapper} onPress={() => { copyToClipboard("email") }}>
        <Text style={styles.name} >{contact.name}</Text>
        <Text style={styles.email}>{contact.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={() => { copyToClipboard("phone") }}>
        <View style={styles.controll}>
          <Ionicons style={styles.icon} name="md-call-outline" size={32} color="green" />
          <Text >{contact.phone}</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.touch} onPress={() => { copyToClipboard("email") }}>
        <View style={styles.controll}>
          <Text style={styles.name}>{contact.name}</Text>
          <Ionicons name="md-mail-outline" size={32} color="purple" />
        </View>
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    paddingTop:20,
    paddingBottom:20,
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
    paddingTop:20,
    paddingBottom:20,

    backgroundColor:"rgba(63,191,127,0.1)",
    flex: 1,
  },
  controll: {
    display:"flex",
    alignSelf: "center",
  },
  icon:{
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
    padding:6,
    alignSelf: "center",
    color: "black",
  },
  email: {
    padding:6,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignSelf: "center",
    color: "black",
  },
});

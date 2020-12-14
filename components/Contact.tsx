import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
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

export default ({ contact, name, index, setModal }: ContactProps) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <Text style={styles.index}>{index}</Text>
    </View>
    <View style={[styles.cell, { flex: 1 }]}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.artist}>{contact.email || name}</Text>
    </View>
    <TouchableOpacity onPress={()=>{setModal(true)}}>
      <View style={styles.cell}>
        <Ionicons name="md-menu" size={32} color="grey" />
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  cell: {
    padding: 16,
    justifyContent: "center",
  },
  index: {
    color: "#b2b3b4",
  },
  artist: {
    color: "gray",
  },
  name: {
    color: "black",
  },
});

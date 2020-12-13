import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Contact } from "./Model";

interface ContactProps {
  contact: Contact;
  name: string;
  index: number;
}

export default ({ contact, name, index }: ContactProps) => (
  <View style={styles.row}>
    <View style={styles.cell}>
      <Text style={styles.index}>{index}</Text>
    </View>
    <View style={[styles.cell, { flex: 1 }]}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.artist}>{contact.email || name}</Text>
    </View>
    <View style={styles.cell}>
      <Icon name="more-horizontal" color="#b2b3b4" size={24} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: "black",
  },
  cell: {
    padding: 16,
    justifyContent: "center",
  },
  index: {
    color: "#b2b3b4",
  },
  artist: {
    color: "#b2b3b4",
  },
  name: {
    color: "white",
  },
});

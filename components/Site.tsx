import React,{ useState } from "react";
import { View, StyleSheet, Modal, Alert, Text, TouchableHighlight } from "react-native";
import Animated from "react-native-reanimated";
import { Site } from "./Model";
import Content from "./Content";
import Cover from "./Cover";

interface SiteProps {
  site: Site;
}

const { Value } = Animated;

export default ({ site }: SiteProps) => {
  const [visible, setModal] = useState(false);
  const y = new Value(0);
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModal(!visible);
              }}
            >
              <Text style={styles.textStyle}>ok</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Cover {...{ y, site }} />
      <Content {...{ y, site, setModal }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

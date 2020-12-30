import * as React from "react";
import {
  StyleSheet,
} from "react-native";
import Animated from "react-native-reanimated";
import { onScroll } from "react-native-redash";
import { Text, View } from '@shoutem/ui';
import { Site as SiteModel, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT} from "./Model";
import Contact from "./Contact";
import { BUTTON_HEIGHT } from "./ShufflePlay";
import Header from "./Header";
import Address from './Address';
import { Divider } from 'react-native-elements';


interface ContentProps {
  site: SiteModel;
  y: Animated.Value<number>,
  setModal: (visible: boolean) => void,
}

const {
  interpolate, Extrapolate,
} = Animated;

export default ({ site: { name, contacts, address }, y, setModal }: ContentProps) => {
  const height = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.ScrollView
      onScroll={onScroll({ y })}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.cover}>
        <Animated.View
          style={[styles.gradient, { height }]}
        >
        </Animated.View>
      </View>
      <View style={styles.header}>
        <Header {...{ y, name }} />
      </View>
      <View style={styles.content}>

        <View style={styles.subtitleContainer}>
          <Text style={styles.artist}>{name}</Text>
        </View>

        <View style={styles.tracks}>
          <Address address={address} />
        </View>
        <View style={styles.tracks}>
          <Divider style={{ marginTop: 30, backgroundColor: 'gray' }} />
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Contacts</Text>
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.hint}>{contacts.length > 0 ? "Tap an item to copy" : "There are no contacts"}</Text>
        </View>

        <View style={styles.tracks}>
          {
            contacts.map((contact, key) => (
              <Contact
                index={key + 1}
                {...{ contact, key, name, setModal }}
              />
            ))
          }
        </View>

      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  hint: {
    color: 'gray',
    fontSize: 20,
  },
  content: {
    minHeight: 800,
  },
  subtitleContainer: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },
  subtitle: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  addressContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  address: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
  },
  gradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent'
  },
  artist: {
    textAlign: "center",
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    marginTop: -BUTTON_HEIGHT,
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: "white",
  },
});

import * as React from "react";
import {
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import { onScroll } from "react-native-redash";
import { Text, Row, Subtitle, View, Icon } from '@shoutem/ui';
import {
  Album, Site as SiteModel, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT,
} from "./Model";
import Contact from "./Contact";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";
import Header from "./Header";
import { Ionicons } from '@expo/vector-icons';
import Address from './Address';
import Site from "./Site";

import openMap from '../node_modules/react-native-open-map/.github/';


interface ContentProps {
  site: SiteModel;
  y: Animated.Value<number>;
}

const {
  interpolate, Extrapolate,
} = Animated;

export default ({ site: { name, contacts, address }, y }: ContentProps) => {
  const height = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const opacity = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
    outputRange: [0, 1, 0],
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
          {/* <LinearGradient
            style={StyleSheet.absoluteFill}
            locations={[0.3,0.9]}
            colors={["transparent", "white"]}
          /> */}
        </Animated.View>
        {/* <View style={styles.artistContainer}>
          <Animated.Text style={[styles.artist, { opacity }]}>{name}</Animated.Text>
        </View> */}
      </View>
      <View style={styles.header}>
        <Header {...{ y, name }} />
        {/* <ShufflePlay /> */}
      </View>
      <View style={styles.content}>

        <View style={styles.subtitleContainer}>
          <Text style={styles.artist}>{name}</Text>
        </View>

        <View style={styles.tracks}>
          <Address address={address} />
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Contacts</Text>
        </View>
        <View style={styles.tracks}>
          {
            contacts.map((contact, key) => (
              <Contact
                index={key + 1}
                {...{ contact, key, name }}
              />
            ))
          }
        </View>

      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    minHeight: 600,
  },
  subtitleContainer: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white',
  },
  subtitle: {
    color: "black",
    fontSize: 20,
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

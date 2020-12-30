import * as React from "react";
import {
  StyleSheet,
} from "react-native";
import Animated from "react-native-reanimated";
import { Site, MAX_HEADER_HEIGHT, HEADER_DELTA } from "./Model";
import { BUTTON_HEIGHT } from "./ShufflePlay";
import ImageLoader from './ImageLoader';

interface CoverProps {
  site: Site;
  y: Animated.Value<number>;
}



const { interpolate, Extrapolate } = Animated;

export default ({ site: { image }, y }: CoverProps) => {
  const scale: any = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = interpolate(y, {
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <ImageLoader style={styles.image} source={{ uri: image }} />
      <Animated.View
        style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "white", opacity }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});

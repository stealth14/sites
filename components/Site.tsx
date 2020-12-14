import * as React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { Site } from "./Model";
import Content from "./Content";
import Cover from "./Cover";

interface SiteProps {
  site : Site;
}

const { Value } = Animated;

export default ({ site }: SiteProps) => {
  const y = new Value(0);
  return (
    <View style={styles.container}>
      <Cover {...{ y, site }} />
      <Content {...{ y, site }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

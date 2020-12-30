import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from "react";

import Site from "./components/Site";

import List from './components/List/List';



function SitesScreen({ navigation }) {
  return (
    <List navigation={navigation} />
  );
}

function DetailsScreen({ route }) {
  const { site } = route.params;
  return (
    <Site {...{ site }} />
  );
}

const Stack = createStackNavigator();


export default () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sites">
          <Stack.Screen name="Sites" component={SitesScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

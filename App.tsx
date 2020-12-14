import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React, { useState, useEffect } from "react";
import { StatusBar, View, Text, Button } from "react-native";
import AppLoading from "expo-app-loading";

import Site from "./components/Site";
import { Contact, Site as SiteModel } from "./components/Model";

import List from './components/List/List';



function HomeScreen({ navigation }) {
  const site: SiteModel = {
    id: "001",
    name: "La carolina, tribuna norte",
    image: "https://s3.amazonaws.com/decom_uploads/external/building1.jpg",
    address: "120 Broadway, New York, NY 10271",
    contacts: [
      { name: "Ronny Cajas", phone: "0992825956", email: "pato1418@yahoo.com" },
      { name: "Ronny Cajas", phone: "0992825956", email: "pato1418@yahoo.com" },
      { name: "Ronny Cajas", phone: "0992825956", email: "pato1418@yahoo.com" }
    ]
  }

  return (
    <List navigation={navigation} />
  );
}

function DetailsScreen({ route, navigation }) {
  const { site } = route.params;
  return (
    <Site {...{ site }} />
  );
}

const Stack = createStackNavigator();


export default () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

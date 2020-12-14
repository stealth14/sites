import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Button as ShoutemButton ,View as ShoutemView, Text as ShoutemText } from '@shoutem/ui';

import openMaps from 'react-native-open-maps';
export default function Address({ address }) {

    return (
        <>
            <View style={styles.row}>
                <View style={styles.cell}>
                </View>
                <View style={[styles.cell]}>
                    <Text style={styles.name}>{address}</Text>
                </View>
            </View>
            <ShoutemView styleName="horizontal center">
                <ShoutemButton style={{marginTop:20}} onPress={()=>{openMaps({query:address})}} styleName={'secondary'}>
                    <ShoutemText style={{color:'white'}}>GO THERE</ShoutemText>
                    <Ionicons name="md-location" size={22} color="white"/>
                </ShoutemButton>
            </ShoutemView>
        </>
    )
}

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
        fontSize: 17,
        color: "black",
    },
});

import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Button as ShoutemButton ,View as ShoutemView, Text as ShoutemText } from '@shoutem/ui';

export default function Address({ address }) {
    const openMap = () => {

    };
    return (
        <>
            <View style={styles.row}>
                <View style={styles.cell}>
                </View>
                <View style={[styles.cell]}>
                    <Text style={styles.name}>{address}</Text>
                </View>
                <View style={{ paddingTop: 8 }}>
                    <Ionicons name="md-location-outline" size={32} color="green" />
                </View>
            </View>
            <ShoutemView styleName="horizontal center">
                <ShoutemButton style={{marginTop:20}} onPress={openMap} styleName="secondary red">
                    <ShoutemText style={{color:'white'}}>OPEN MAPS</ShoutemText>
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

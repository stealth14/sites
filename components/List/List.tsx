import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import '@shoutem/ui/theme.js';
import { Ionicons } from '@expo/vector-icons';
import { Site as SiteModel } from '../Model';
import {TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';

import {
    //row
    View,
    Row,
    Image,
    Title,
    Subtitle,
    //list
    ListView,
    Screen
} from '@shoutem/ui';

const fetchSites = async () => {
    const endpointURI = 'https://s3.amazonaws.com/decom_uploads/external/sites.json';

    try {
        const response = await fetch(endpointURI);
        const json = await response.json();
        console.log(json.sites);
        return json.sites;

    } catch (e) {
        console.log(e);
    }
};

export default function List({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [sites,setSites] = useState([]);
    
    const renderRow = (site: SiteModel) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { site })}>
                
                <Row>
                    <Image
                        styleName="medium rounded-corners"
                        source={{uri:site.image}}
                    />
                    <View styleName="vertical stretch space-between">
                        <Title>{site.name}</Title>
                        <Subtitle>{site.address}</Subtitle>
                    </View>
                </Row>
                <Divider style={{ backgroundColor: 'gray' }} />
            </TouchableOpacity>
        );
    }

    useEffect(
        () => {
            Font.loadAsync({
                'Rubik-Regular': require('../../assets/Rubik-Regular.ttf')
            }
            ).then(() => setLoading(false));

            fetchSites().then(
                sites => setSites(sites)
            );

        }, []
    )

    if (loading) {
        return <AppLoading />
    }

    return (
        <Screen>
            <ListView
                data={sites}
                renderRow={renderRow}
            />
        </Screen>
    );
}

import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'
import '@shoutem/ui/theme.js';
import { Ionicons } from '@expo/vector-icons';

import {
    //row
    View,
    Row,
    Image,
    Subtitle,
    //list
    ListView,
    Screen
} from '@shoutem/ui';

const restaurants = [
    {
        "name": "Gaspar Brasserie",
        "address": "185 Sutter St, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" },
    },
    {
        "name": "Chalk Point Kitchen",
        "address": "527 Broome St, New York, NY 10013",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-2.jpg" },
    },
    {
        "name": "Kyoto Amber Upper East",
        "address": "225 Mulberry St, New York, NY 10012",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-3.jpg" },
    },
    {
        "name": "Sushi Academy",
        "address": "1900 Warner Ave. Unit A Santa Ana, CA",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-4.jpg" },
    },
    {
        "name": "Sushibo",
        "address": "35 Sipes Key, New York, NY 10012",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-5.jpg" },
    },
    {
        "name": "Mastergrill",
        "address": "550 Upton Rue, San Francisco, CA 94109",
        "image": { "url": "https://shoutem.github.io/static/getting-started/restaurant-6.jpg" },
    }
]
interface Restaurant {
    name: string,
    address: string,
    image: { url: string },
};

const renderRow = (restaurant: Restaurant) => {
    return (
        <Row>
            <Image
                styleName="medium rounded-corners"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-1.png' }}
            />
            <View styleName="vertical stretch space-between">
                <Subtitle>Take A Romantic Break In A Boutique Hotel</Subtitle>
            </View>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </Row>
    );
}



export default function List({ navigation }) {
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            Font.loadAsync({
                'Rubik-Regular': require('../../assets/Rubik-Regular.ttf')
            }
            ).then(() => setLoading(false))
        }, []
    )

    if (loading) {
        return <AppLoading />
    }

    return (
        <Screen>
            <ListView
                data={restaurants}
                renderRow={renderRow}
            />
        </Screen>
    );
}

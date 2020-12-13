import React from 'react'
import {
    Row,
    Image,
    Subtitle,
    Caption,
    View,
    Button,
    Icon
} from '@shoutem/ui';


export default function Item() {
    return (
        <Row>
            <Image
                styleName="small rounded-corners"
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-3.png' }}
            />
            <View styleName="vertical stretch space-between">
                <Subtitle>Wilco Cover David Bowie&#39;s "Space Oddity"</Subtitle>
                <Caption>June 21  ·  20:00</Caption>
            </View>
            <Button styleName="right-icon"><Icon name="add-event" /></Button>
        </Row>
    )
}

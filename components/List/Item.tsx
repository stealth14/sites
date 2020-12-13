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
                source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-11.png' }}
            />
            <View styleName="vertical stretch space-between">
                <Subtitle>Family Safari Vacation To The Home Of The Gods</Subtitle>
                <View styleName="horizontal">
                    <Subtitle styleName="md-gutter-right">$120.00</Subtitle>
                    <Caption styleName="line-through">$150.00</Caption>
                </View>
            </View>
            <Button styleName="right-icon"><Icon name="add-to-cart" /></Button>
        </Row>
    )
}

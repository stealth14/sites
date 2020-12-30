import React, { Component } from 'react';
import { Animated } from 'react-native';

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
    loaded:false,
  }

  onLoad = () => {    
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start(
      () => this.setState({loaded:true})
    );
  }

  render() {
    return ( <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              },
            ],
          },
          this.props.style,
        ]}
      />
    );
  }
}

export default ImageLoader;
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import * as Font from 'expo-font';
import fontAwSome from '../../assets/fonts/fa-solid-900.ttf'

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwsome: fontAwSome,
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { style, color, onPress } = this.props;

    let bgColor = "#E31676";
    let textColor = "#fff";

    if (color === 'white') {
      bgColor = '#fff'
      textColor = '#E31676'
    }

    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: bgColor }]}>
          {
            this.state.fontLoaded ? (
              <Text style={[styles.circleButtonTitle, { color: textColor }]} >
                {this.props.children}
              </Text>
            ) : null
          }
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  circleButton: {
    width: 48,
    height: 48,
    margin: 8,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 24,
    lineHeight: 38,
  },
});

export default CircleButton;

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
    render() {
        return (
            <View style={styles.appbar}>
                <View>
                    <Text style={styles.appbarTitle}>MEMOT</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appbar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 78,
      paddingTop: 30,
      justifyContent: 'center',
      backgroundColor: '#265366',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 2,
      zIndex: 10,
    },
    appbarTitle: {
      color: '#fff',
      fontSize: 18,
    },
  });
export default Appbar;

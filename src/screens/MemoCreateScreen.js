import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import firebase from 'firebase';


import CircleButton from '../elements/CircleButton';

// onPress= {() => { this.props.navigation.goBack(); }}
class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date()
    })
      .then((docRef) => {
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.log("error");
      });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.memoEditInput}
        multiline
        value={this.state.body}
        onChangeText={(text) => { this.setState({ body: text }); }}
      />
        <CircleButton onPress={this.handlePress.bind(this)}>
          {'\uf00c'}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    paddingTop: 21,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default MemoCreateScreen;

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image,
  Button,
} from 'react-native'
import { connect } from 'dva'

import { createAction, NavigationActions } from '../utils'

@connect()
class Account extends Component {
  static navigationOptions = {
    title: 'Account',
    tabBar: {
      label: 'Account',
      icon: ({ focused, tintColor }) => (
        <Image style={[styles.icon, {tintColor: focused? tintColor : 'gray'}]} source={require('../images/person.png')} />
      ),
    },
  }

  onPress = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Button title='Goto Login' onPress={this.onPress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Account

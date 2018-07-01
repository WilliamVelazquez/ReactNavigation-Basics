import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class Profile extends Component{
  handlePress=()=>{
    this.props.navigation.navigate('Home');
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: `${navigation.getParam('name')} ${navigation.getParam('age', 23)}`
    }
  }
  setParams = () => {
    this.props.navigation.setParams({
      name: 'Widyet',
      age: 24
    })
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button 
          title="Ir al Home"
          onPress={this.handlePress}
        />
        <Button 
          title="Cambiar Nombre"
          onPress={this.setParams}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile;

import React, { useState } from 'react';
import {View, Text,TextInput,TouchableOpacity}   from 'react-native';
import {Styles} from '../styles/global';
import { connect } from 'react-redux';
import {getCountry} from '../redux/actions/action';
type Props={
  getCountry:Function,
  navigation:{
    navigate:Function
  }
}
const Home=({getCountry, navigation}: Props)=>{
    const [country, changeCountry] = useState('')

  const clickHandler = () => {
    getCountry(country, navigation)
  }
    return(

        <View style={Styles.conainer}>
            <TextInput  styles={Styles.input} onChangeText={val => changeCountry(val)}></TextInput>
            <TouchableOpacity  styles={Styles.button} onPress={() =>  clickHandler()}>
                <Text Style={Styles.buttonText}>submit</Text>
            </TouchableOpacity>
        </View>

    );
}
export default connect(null, {getCountry})(Home);


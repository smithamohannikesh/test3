import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
//import {Country} from '../screens/Country';
//import {Weather} from '../screens/Weather';
const stack = createStackNavigator();
const Navigation = ()=>{
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title:"home",
                        headerStyle:{
                            backgroudColor:'#d1d1d1'
                        }
                    }}
                />
               
            </stack.Navigator>
        </NavigationContainer>
    );
    
}
export default Navigation;
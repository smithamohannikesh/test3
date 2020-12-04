import {http} from '../http';
import {Dispatch } from 'redux';
const getCountry = (inp: string, navigation: any) => (dispatch: Dispatch) => {
    return http.get(`https://restcountries.eu/rest/v2/name/${inp}`)
    .then(country => {
      dispatch({
        type: 'SET_COUNTRY',
        data: country
      })
      navigation.navigate('Country');
    })
  }
    export {
        getCountry,
        
      }
import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";

const API_KEY = "8ffece332fcf3dc518ba4a18c1176e4b";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`hett://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords: { latitude , longitude} 
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState( {isLoading: false});
    } catch (error) {
      Alert.alert("Can't find you." ,"We so sad...");
    }
  }
  ComponentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
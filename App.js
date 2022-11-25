
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ZoomMapTest from "./maptest";
import SvgComponent from "./map";
import MapSmall from "./mp";
import ZoomMap from "./map_zoom";



export default function App () {
  return (
    <View style={{
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: '#ecf0f1',
    }}
    >
      <ZoomMap/>    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

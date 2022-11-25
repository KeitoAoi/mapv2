import React, { Component } from 'react';
import { View } from 'react-native';
import { Circle , Path } from 'react-native-svg';
import SvgPanZoom, { SvgPanZoomElement } from 'react-native-svg-pan-zoom';
import find_path from "./points_map"

var t
class ZoomMap extends Component {

  render() {
    return (
      <View style = {{ width: '100%', height:'100%' }}>

        <SvgPanZoom
          canvasHeight  = {400}
          canvasWidth   = {400}
          minScale      = {0.5}
          initialZoom   = {0.7}
          onZoom        = {(zoom) => { console.log('onZoom:' + zoom) }}
          
          
        >

          {/* Doesn't consume or respond to clicks */}
          

          {/* Responds to clicks */}
          <SvgPanZoomElement
            x ={50}
            y ={50}
          >
            <Circle
              
              class="changeCircle"
              cx          = {42}
              cy          = {42}
              r           = {20} 
              stroke      = "blue"
              strokeWidth = "2.5"
              fill        = "red"
              onPress={() => {
                this.fill="blue"
                console.log(find_path("c1"))
              }}
            />
             <Circle
              id='c2'
              cx          = {299}
              cy          = {42}
              r           = {20} 
              stroke      = "blue"
              strokeWidth = "2.5"
              fill        = "red"
              onPress={() => {
                console.log(find_path("c2"))
              }}
            />
            <Circle
              id='c3'
              cx          = {42}
              cy          = {299}
              r           = {20} 
              stroke      = "blue"
              strokeWidth = "2.5"
              fill        = "red"
              onPress={() => {

                
                console.log(find_path("c3"))
                
              }}
            />
             <Circle
              id='c4'
              cx          = {299}
              cy          = {299}
              r           = {20} 
              stroke      = "blue"
              strokeWidth = "2.5"
              fill        = "red"
              onPress={() => {

                
                console.log(find_path("c4"))
                
              }}
            />
            <Path d="M42 42 299 42" stroke-width="1" stroke="black"/>
            <Path d="M42 42 42 299" stroke-width="5" stroke="black"/>
            <Path d="M42 299 299 299" stroke-width="5" stroke="black"/>
            <Path d="M299 42 299 299" stroke-width="5" stroke="black"/>
          </SvgPanZoomElement>

        </SvgPanZoom>
            
      </View>
    );
  }
}

export default ZoomMap
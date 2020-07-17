import React from 'react';
import { ActivityIndicator,TouchableOpacity,View, Text ,ImageBackground, StyleSheet, Image} from 'react-native';
import { useFonts, Inter_200ExtraLight } from '@expo-google-fonts/inter';

import image from '../Config/images.js'


export default function App() {
  let [fontsLoaded] = useFonts({Inter_200ExtraLight})

  return (

      <ImageBackground  style={styles.image}>
          <View style={styles.view}>

            <View style={{ flex: 1, backgroundColor:"white"}}>
                
                <TouchableOpacity
                style={{
                backgroundColor: 'darkslategrey',
                padding: 20,
                borderRadius: 5
                }}
                onPress={()=>navigation.navigate("Camera")}
                >
                <Text style={{fontSize: 20,color: 'white',textAlign:"center"}}>Camera</Text>
                </TouchableOpacity>

                <Text style={{fontSize:20,textAlign:"center"}}>or</Text>

                <TouchableOpacity
                style={{
                backgroundColor: 'darkslategrey',
                padding: 20,
                borderRadius: 5,
                }}
                
                onPress={()=>this.props.navigation.navigate("Gallery")}
                >
                
                <Text style={{fontSize: 20,color: 'white',textAlign:"center"}}>Gallery</Text>
                </TouchableOpacity>
                <Text style={{fontSize:26,textAlign:"center"}}>{"\n"}CamApp{"\n"}</Text>

                <Text style={{fontSize:25,alignItems:"center",justifyContent:"center",textAlign:"center",color:"black",backgroundColor:"floralwhite"}}>
                

                {"\n"}
                Create pdf documents using camera or image gallery
                {"\n"}{"\n"}
                High-resolution scan & image editor avaliable
                {"\n"}
                
                </Text>
                <Text style={{textAlign:"center"}}>
                {"\n"}Developed Using React Native with ❤</Text>

                </View>
          </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"dodgerblue"
    },
    view:{
        position:"absolute" ,
        alignItems:"center"
    },
    text: {
      top:20,
      fontFamily: 'Inter_200ExtraLight',
      fontSize:20
    }, 
    logo:{
        width:200,
        height:200
    },
  });
import React, { useState } from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Cam from "./Components/camera";
import Gal from "./Components/gallery";
import Start from "./Components/WelcomeScreen";
import Home from "./Components/home";

function HomeScreen({ navigation }) {
  return (
    //   <View style={{ flex: 1, backgroundColor:"white"}}>

    //  <TouchableOpacity
    //  style={{
    //    backgroundColor: 'darkslategrey',
    //   padding: 20,
    //   borderRadius: 5
    //   }}
    //  onPress={()=>navigation.navigate("Camera")}
    //  >
    //  <Text style={{fontSize: 20,color: 'white',textAlign:"center"}}>Camera</Text>
    //  </TouchableOpacity>

    //  <Text style={{fontSize:20,textAlign:"center"}}>or</Text>

    //  <TouchableOpacity
    //  style={{
    //    backgroundColor: 'darkslategrey',
    //   padding: 20,
    //   borderRadius: 5,
    //   }}

    //  onPress={()=>navigation.navigate("Gallery")}
    //  >

    //  <Text style={{fontSize: 20,color: 'white',textAlign:"center"}}>Gallery</Text>
    //  </TouchableOpacity>
    // <Text style={{fontSize:26,textAlign:"center"}}>{"\n"}CamApp{"\n"}</Text>

    //  <Text style={{fontSize:25,alignItems:"center",justifyContent:"center",textAlign:"center",color:"black",backgroundColor:"floralwhite"}}>

    //  {"\n"}
    //   Create pdf documents using camera or image gallery
    //   {"\n"}{"\n"}
    //   High-resolution scan & image editor avaliable
    //   {"\n"}

    //  </Text>
    //  <Text style={{textAlign:"center"}}>
    //  {"\n"}Developed Using React Native with ❤</Text>

    // </View>
    <Home navigation={navigation} />
  );
}

function GalleryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Gal />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

function CameraScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Cam />
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [display, setDisplay] = useState(0);

  setTimeout(() => {
    setDisplay(1);
  }, 4000);
  //setTimeout(() => { setDisplay(0)}, 8000);
  if (display === 0) {
    return <Start />;
  } else if (display === 1) {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

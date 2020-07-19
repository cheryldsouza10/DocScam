import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button,CameraRoll } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import * as Permissions from 'expo-permissions';


export default function App() {
  let [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
        if (status !== 'granted') {
          alert('Permission to access camera roll is required!');
          return;
        }
        console.log(status,permissions)
      let result = await ImagePicker.launchCameraAsync({
        base64:true,
        allowsEditing:true,
        aspect: [4, 3],
      });
      if (!result.cancelled) {
        setSelectedImage({ localUri: result.uri });
      }
    console.log(result)
    
  };

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        <TouchableOpacity onPress={async()=>await Print.printAsync({html:"<img width='595px' height='842px' src='"+selectedImage.localUri+"'/>",})} style={styles.button}>
          <Text style={styles.buttonText}>Add this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To add a photo from your phone's camera, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Click a photo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
    textAlign:"center"
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});

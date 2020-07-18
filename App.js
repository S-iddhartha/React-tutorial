import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, TouchableWithoutFeedback,
   TouchableOpacity, Button, Alert } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text>HI, This is siddhartha!</Text>

      <Button title="Click Me"
        onPress={ () => 
          Alert.alert("My Little", "My Message" [
            { text: "Yes", onPress: () => { console.log('Yes') } },
            { test: "No", onPress: () => { console.log('No') } }
          ])
        }
      />

      <TouchableOpacity onPress={()=> console.log('Touch') } >

      <Image
        source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"
        }}
      />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

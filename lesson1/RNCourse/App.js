import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{margin:16, borderWidth:2, borderColor:'red', padding: 16}}>
        <Text>Inner Text</Text>
      </View>
      <Text>Another piece of text</Text>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="I am a button"/>
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
  dummyText: {
    margin:16, 
    padding:16,
    borderWidth:2, 
    borderColor:'red', 
  }
});
